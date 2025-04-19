export async function instrument(code) {
  const esprima = await import('esprima');
  const estraverse = await import('estraverse');
  const escodegen = await import('escodegen');

  const ast = esprima.parseScript(code, { range: true });

  // Track function declarations and expressions
  const functionNames = new Set();

  // First pass: collect function names
  estraverse.traverse(ast, {
    enter(node) {
      if (node.type === 'FunctionDeclaration' && node.id) {
        functionNames.add(node.id.name);
      } else if (
        node.type === 'VariableDeclarator' &&
        node.init &&
        node.init.type === 'FunctionExpression' &&
        node.id
      ) {
        functionNames.add(node.id.name);
      }
    },
  });

  // Second pass: instrument the code
  estraverse.replace(ast, {
    enter(node, parent) {
      if (node.type === 'DebuggerStatement') {
        this.remove();
        return;
      }

      if (node._instrumented) {
        return node;
      }

      // Replace setTimeout with queueTask
      if (node.type === 'CallExpression' && node.callee.name === 'setTimeout') {
        return {
          type: 'CallExpression',
          callee: { type: 'Identifier', name: 'queueTask' },
          arguments: [
            node.arguments[0],
            node.arguments[1],
            { type: 'Literal', value: 'setTimeout' },
          ],
        };
      }

      // Track MutationObserver creation (unchanged)
      if (
        node.type === 'NewExpression' &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'MutationObserver'
      ) {
        return node;
      }

      // Wrap function calls with stack tracking
      if (
        node.type === 'CallExpression' &&
        node.callee.type === 'Identifier' &&
        functionNames.has(node.callee.name)
      ) {
        const funcName = node.callee.name;
        return {
          type: 'CallExpression',
          callee: {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'stackPush' },
                    arguments: [{ type: 'Literal', value: funcName }],
                  },
                },
                {
                  type: 'TryStatement',
                  block: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ReturnStatement',
                        argument: {
                          type: 'CallExpression',
                          callee: node.callee,
                          arguments: node.arguments,
                          _instrumented: true, // Mark inner call as instrumented
                        },
                      },
                    ],
                  },
                  handler: {
                    type: 'CatchClause',
                    param: { type: 'Identifier', name: 'e' },
                    body: {
                      type: 'BlockStatement',
                      body: [
                        {
                          type: 'ExpressionStatement',
                          expression: {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'stackPop' },
                            arguments: [],
                          },
                        },
                        {
                          type: 'ThrowStatement',
                          argument: { type: 'Identifier', name: 'e' },
                        },
                      ],
                    },
                  },
                  finalizer: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'CallExpression',
                          callee: { type: 'Identifier', name: 'stackPop' },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          arguments: [],
        };
      }
    },
  });

  // Wrap the entire code with stack tracking
  const wrapperStart = esprima.parseScript("stackPush('main');").body;
  const wrapperEnd = esprima.parseScript('stackPop();').body;
  ast.body = [...wrapperStart, ...ast.body, ...wrapperEnd];

  return escodegen.generate(ast);
}
