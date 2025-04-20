import React from 'react';
import styles from '@/app/js-visualizer/styles.module.scss';
import { FaLightbulb, FaCircleInfo } from 'react-icons/fa6';

// Array of tips for the JavaScript Visualizer
const tips = [
  {
    id: 2,
    text: 'Micro tasks (<code>Promise</code>, <code>queueMicrotask</code>, <code>MutationObserver</code>, <code>process.nextTick</code>) have higher priority than macro tasks',
  },
  {
    id: 3,
    text: 'Macrotasks include <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>, <code>requestAnimationFrame</code>, I/O events, UI events, and <code>postMessage</code>. They run after all microtasks complete.',
  },
  {
    id: 4,
    text: 'After the <code>microtasks</code> queue has been processed, the event loop will check the <code>macrotasks</code> queue and execute all the <code>macrotasks</code>',
  },
  {
    id: 5,
    text: 'ReadableStream Callbacks <code>.pipeTo()</code>, <code>.getReader()</code> are also micro tasks',
  },
  {
    id: 6,
    text: '<code>process.nextTick()</code> runs before any I/O or timer callbacks, while <code>setImmediate()</code> runs after I/O events — making it better for deferring execution without blocking I/O.',
  },
  {
    id: 7,
    text: '<code>Promises</code> and <code>setTimeout</code> those resolve / complete quickly might not show in Queue Stack Since that happens instantaneously',
  },
];

function Tips() {
  return (
    <div className={styles.tipsSection}>
      <h3>
        <FaLightbulb /> Tips
      </h3>
      <div className={styles.tipsContainer}>
        {tips.map((tip) => (
          <div key={tip.id} className={styles.tipItem}>
            {/* <span className={styles.tipBullet}>•</span> */}
            <span
              className={styles.tipText}
              dangerouslySetInnerHTML={{ __html: tip.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Disclaimer({ infoText }) {
  return (
    <div className={styles.disclaimer}>
      <p>
        <span className={styles.disclaimerIcon}>
          <FaCircleInfo />
        </span>
        {infoText}
      </p>
    </div>
  );
}

export default Tips;
