import styles from '@/app/js-visualizer/styles.module.scss';
import React from 'react';
import { codeSnippets } from '@/constants/visualizer';
import { FaCode } from 'react-icons/fa';

export default function JsVisualizerHeader({ loadSnippet }) {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <h1>JavaScript Visualizer</h1>
        <p>
          Visualize JavaScript execution, call stack, and task queue in
          real-time
        </p>
      </div>
      <div className={styles.snippetsSection}>
        <h2>Example Snippets</h2>
        <div className={styles.snippets}>
          {codeSnippets.map((snippet, index) => (
            <button
              key={index}
              className={styles.snippetButton}
              onClick={() => loadSnippet(snippet.code)}
            >
              <FaCode /> {snippet.name}
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
