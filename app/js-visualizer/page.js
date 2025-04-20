'use client';

import styles from './styles.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaRedo, FaPalette } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Editor from '@monaco-editor/react';
import { instrument } from '@/app/utils/instrumentor-babel';
import { codeSnippets, editorThemes } from '@/constants/visualizer';
import Tips, { Disclaimer } from '@/components/JsVisualizer/Tips';
import JsVisualizerHeader from '@/components/JsVisualizer/JsHeader';
import LanguageWarning from '@/components/JsVisualizer/LanguageWarning';
import ErrorMessage from '@/components/JsVisualizer/ErrorMessage';
import { FaCode, FaTerminal } from 'react-icons/fa6';
import { TbTransform } from 'react-icons/tb';
import { HiQueueList } from 'react-icons/hi2';
import { HiOutlineQueueList } from 'react-icons/hi2';

const formatLogs = (logs) => {
  return logs
    .map((log) => {
      if (log.startsWith('[LOG]')) {
        return `<span class="${styles.log}">${log}</span>`;
      } else if (log.startsWith('[STACK')) {
        return `<span class="${styles.stack}">${log}</span>`;
      } else if (log.startsWith('[QUEUE]')) {
        return `<span class="${styles.queue}">${log}</span>`;
      } else if (log.startsWith('[ERROR]')) {
        return `<span class="${styles.error}">${log}</span>`;
      } else if (log.startsWith('[DEBUG]')) {
        return `<span class="${styles.debug}">${log}</span>`;
      } else if (log.startsWith('[MACRO]')) {
        return `<span class="${styles.macro}">${log}</span>`;
      } else if (log.startsWith('[MICRO]')) {
        return `<span class="${styles.micro}">${log}</span>`;
      }
      return log;
    })
    .join('\n');
};

const JsVisualizer = () => {
  const [input, setInput] = useState(codeSnippets[4].code);
  const [output, setOutput] = useState('');
  const [logs, setLogs] = useState('');
  const [microQueue, setMicroQueue] = useState([]);
  const [macroQueue, setMacroQueue] = useState([]);
  const [error, setError] = useState(null);
  const [editorTheme, setEditorTheme] = useState('vs-dark');
  const [languageWarning, setLanguageWarning] = useState(null);

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const run = async () => {
    setError(null);
    setMicroQueue([]);
    setMacroQueue([]);
    setLogs('');

    try {
      const codeToRun = editorRef.current
        ? editorRef.current.getValue()
        : input;
      const instrumented = await instrument(codeToRun);

      setOutput(instrumented);

      // Create a new iframe for each execution to ensure complete isolation
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Set a timeout to remove the iframe after execution
      const iframeTimeout = setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 60000); // Remove after 60 seconds regardless of outcome

      // Load the sandbox.html file
      iframe.src = '/js-visualizer/sandbox.html';

      // Wait for the iframe to load
      iframe.onload = () => {
        // Send the instrumented code to the iframe
        iframe.contentWindow.postMessage(
          {
            type: 'execute',
            code: instrumented,
          },
          '*'
        );
      };

      // Clean up the iframe after execution
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          iframe.contentWindow.postMessage('cleanup', '*');
          document.body.removeChild(iframe);
        }
        clearTimeout(iframeTimeout);
      }, 55000);
    } catch (err) {
      setError(err.message);
      setLogs((prev) => prev + '\n[ERROR] ' + err.message);
    }
  };

  const resetLogs = (clearEditor = false) => {
    setLogs('');
    setMicroQueue([]);
    setMacroQueue([]);
    setError(null);
    setLanguageWarning(null);

    // Clear all code from the editor
    if (editorRef.current && clearEditor) {
      editorRef.current.setValue('');
    }
  };

  const loadSnippet = (code) => {
    setInput(code);

    if (editorRef.current) editorRef.current.setValue(code);

    resetLogs();
  };

  const changeTheme = (theme) => {
    if (theme === editorTheme) return;

    setEditorTheme(theme);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'logs') {
        setLogs(event.data.logs.join('\n'));
      } else if (event.data.type === 'microQueue') {
        setMicroQueue(event.data.queue);
        setLogs(event.data.logs.join('\n'));
      } else if (event.data.type === 'macroQueue') {
        setMacroQueue(event.data.queue);
        setLogs(event.data.logs.join('\n'));
      } else if (event.data.type === 'error') {
        setError(event.data.error);
        setLogs(event.data.logs.join('\n'));
      } else if (event.data.type === 'languageWarning') {
        setLanguageWarning(event.data.language);
        setLogs(event.data.logs.join('\n'));
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      const iframe = document.getElementById('sandbox');

      if (iframe && iframe.contentWindow)
        iframe.contentWindow.postMessage('cleanup', '*');

      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className={styles.visualizer}>
      <JsVisualizerHeader loadSnippet={loadSnippet} />

      <div className={styles.inputSection}>
        <div className={styles.editorHeader}>
          <h2>
            <FaCode /> Input Code
          </h2>
          <div className={styles.themeSelector}>
            <FaPalette className={styles.themeIcon} />
            <select
              value={editorTheme}
              onChange={(e) => changeTheme(e.target.value)}
              className={styles.themeSelect}
            >
              {editorThemes.map((theme) => (
                <option key={theme.value} value={theme.value}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.codeEditor}>
          <Editor
            height='300px'
            defaultLanguage='javascript'
            defaultValue={input}
            theme={editorTheme}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "'Fira Code', monospace",
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              folding: true,
              lineDecorationsWidth: 10,
              lineNumbersMinChars: 3,
              renderLineHighlight: 'all',
              scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                useShadows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
                alwaysConsumeMouseWheel: false,
              },
            }}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={run} className={styles.runButton}>
            <FaPlay /> Run Code
          </button>
          <button
            onClick={() => resetLogs(true)}
            className={styles.resetButton}
          >
            <FaRedo /> Reset
          </button>
        </div>
      </div>

      <div className={styles.visualizationSection}>
        <div className={styles.queueVisualization}>
          <h3>
            <HiQueueList />
            Micro Task Queue
          </h3>
          <div className={styles.queueContainer}>
            {microQueue.length === 0 ? (
              <div className={styles.emptyState}>Empty</div>
            ) : (
              microQueue.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.queueItem} ${styles.micro}`}
                >
                  <div className={styles.queueItemHeader}>
                    <span>Source: {item.source}</span>
                  </div>
                  <div className={styles.queueItemDetails}>{item.details}</div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={styles.queueVisualization}>
          <h3>
            <HiOutlineQueueList />
            Macro Task Queue
          </h3>
          <div className={styles.queueContainer}>
            {macroQueue.length === 0 ? (
              <div className={styles.emptyState}>Empty</div>
            ) : (
              macroQueue.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.queueItem} ${styles.macro}`}
                >
                  <div className={styles.queueItemHeader}>
                    <span>Source: {item.source}</span>
                    {item.delay && <span>Delay: {item.delay}ms</span>}
                  </div>
                  <div className={styles.queueItemDetails}>{item.details}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className={styles.outputSection}>
        <h3>
          <TbTransform />
          Instrumented Code
        </h3>
        <div className={styles.codeBlock}>
          <SyntaxHighlighter
            language='javascript'
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontFamily: "'Fira Code', monospace",
            }}
            codeTagProps={{
              style: {
                fontFamily: "'Fira Code', monospace",
              },
            }}
          >
            {output}
          </SyntaxHighlighter>
        </div>

        <h3>
          <FaTerminal /> Console Output
        </h3>
        <div
          className={`${styles.consoleOutput}`}
          style={{ fontFamily: "'Fira Code', monospace" }}
          dangerouslySetInnerHTML={{ __html: formatLogs(logs.split('\n')) }}
        />

        {languageWarning && (
          <LanguageWarning languageWarning={languageWarning} />
        )}

        {error && <ErrorMessage error={error} />}
      </div>

      {/* Tips Section */}
      <Tips />

      <Disclaimer infoText='This visualization tool is for educational purposes only. The information provided may not always be 100% accurate. Please verify any critical information independently.' />
    </div>
  );
};

export default JsVisualizer;
