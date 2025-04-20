import React from 'react';
import styles from '@/app/js-visualizer/styles.module.scss';
import { FaLightbulb } from 'react-icons/fa';

function Tips() {
  return (
    <div className={styles.tipsSection}>
      <h3>
        <FaLightbulb /> Tips
      </h3>
      <ul>
        <li>
          Use <code>setTimeout</code> to schedule tasks for later execution
        </li>
        <li>
          Use <code>setImmediate</code> to schedule tasks for the next event
          loop iteration
        </li>
        <li>The event queue shows pending tasks waiting to be executed</li>
        <li>
          Try the &quot;Function Calls&quot; example to see function execution
          in action
        </li>
      </ul>
    </div>
  );
}

export function Disclaimer({ infoText }) {
  return (
    <div className={styles.disclaimer}>
      <p>
        <span className={styles.disclaimerIcon}>ℹ️</span>
        {infoText}
      </p>
    </div>
  );
}

export default Tips;
