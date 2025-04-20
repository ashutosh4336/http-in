import React from 'react';
import styles from '@/app/js-visualizer/styles.module.scss';

export default function ErrorMessage({ error }) {
  return (
    <div className={styles.errorMessage}>
      <h3>Error</h3>
      <div className={styles.codeBlock}>
        <pre style={{ fontFamily: "'Fira Code', monospace" }}>{error}</pre>
      </div>
    </div>
  );
}
