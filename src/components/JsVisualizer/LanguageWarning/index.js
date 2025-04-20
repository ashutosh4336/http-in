import React from 'react';
import styles from '@/app/js-visualizer/styles.module.scss';

export default function LanguageWarning({ languageWarning }) {
  return (
    <div className={styles.languageWarning}>
      <h3>Language Warning</h3>
      <p>
        <span className={styles.warningIcon}>⚠️</span>
        Detected {languageWarning} code. This visualizer only supports
        JavaScript. Some features may not work correctly.
      </p>
    </div>
  );
}
