// Available themes for Monaco Editor
const editorThemes = [
  { name: 'VS Code Dark', value: 'vs-dark' },
  { name: 'VS Code Light', value: 'light' },
  { name: 'High Contrast Dark', value: 'hc-black' },
];

// Example code snippets
const codeSnippets = [
  {
    name: 'Basic Timeout',
    code: `console.log("1. Hello from TheHTTP");

setTimeout(() => {
  console.log("2. Hello from timeout");
}, 1000);

console.log("3. Hello Again from TheHTTP");`,
  },
  {
    name: 'Immediate vs Timeout',
    code: `console.log('A');

setImmediate(() => {
  console.log('B');
});

setTimeout(() => {
  console.log('C');
}, 3000);

console.log('D');`,
  },
  {
    name: 'Nested Timeouts',
    code: `console.log('Start');

setTimeout(() => {
  console.log('First timeout');
  
  setTimeout(() => {
    console.log('Nested timeout');
  }, 500);
  
  console.log('After nested timeout setup');
}, 1000);

console.log('End');`,
  },
  {
    name: 'Promise Chain',
    code: `console.log('Start');

// Create a MutationObserver to watch for DOM changes
const observer = new MutationObserver((mutations) => {
  // Use queueMicrotask to ensure this callback appears in the micro task queue
  queueMicrotask(() => {
    console.log('Mutation detected:', mutations.length, 'changes');
  });
});

// Start observing the document body
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Add a delay to the first promise
Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    // Add a delay before creating the DOM element
    return new Promise(resolve => setTimeout(resolve, 1000));
  })
  .then(() => {
    console.log('Creating DOM element...');
    // Trigger a DOM mutation with a noticeable change
    const div = document.createElement('div');
    div.textContent = 'New element';
    div.style.backgroundColor = 'red';
    div.style.color = 'white';
    div.style.padding = '10px';
    div.style.margin = '10px';
    div.style.fontWeight = 'bold';
    document.body.appendChild(div);
    
    // Add another delay before resolving
    return new Promise(resolve => setTimeout(resolve, 1000));
  })
  .then(() => {
    console.log('Promise 2');
    // Add a delay before the final promise
    return new Promise(resolve => setTimeout(resolve, 1000));
  })
  .then(() => {
    console.log('Promise 3');
  });

// Add a longer delay to the timeout
setTimeout(() => {
  console.log('Timeout');
}, 2000);

console.log('End');`,
  },
  {
    name: 'Function Calls',
    code: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Greeting sent to \${name}\`;
}

function processUser(user) {
  const result = greet(user);
  console.log(result);
  return result;
}

processUser('John');`,
  },
];

export { editorThemes, codeSnippets };
