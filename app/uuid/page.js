'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/Uuid.module.scss';

export default function UuidPage() {
  const [count, setCount] = useState(1);
  const [generatedUuids, setGeneratedUuids] = useState([]);
  const [uuidToValidate, setUuidToValidate] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const generateUuids = () => {
    const countNum = Math.min(Math.max(1, parseInt(count) || 1), 10);
    const uuids = Array(countNum)
      .fill()
      .map(() => uuidv4());
    console.log(uuids);
    setGeneratedUuids(uuids);
  };

  const validateUuid = (uuid) => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const isValid = uuidRegex.test(uuid);
    setValidationResult(isValid);
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>UUID Generator</h1>
        <p>Generate unique UUIDs (v4)</p>

        <div className={styles.inputGroup}>
          <input
            type='number'
            min='1'
            max='10'
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className={styles.input}
          />
          <button onClick={generateUuids} className={styles.button}>
            Generate
          </button>
        </div>

        {generatedUuids.length > 0 && (
          <div className={styles.output}>
            {generatedUuids.map((uuid) => (
              <div key={uuid} className={styles.uuidItem}>
                <span>{uuid}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(uuid)}
                  className={`${styles.copyButton}`}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <h2>UUID Validator</h2>
        <p>Validate if a string is a valid UUID v4</p>

        <div className={styles.inputGroup}>
          <input
            type='text'
            value={uuidToValidate}
            onChange={(e) => {
              setUuidToValidate(e.target.value);
              validateUuid(e.target.value);
            }}
            placeholder='Enter UUID to validate'
            className={styles.input}
          />
        </div>

        {validationResult !== null && (
          <div
            className={`${styles.validationResult} ${
              validationResult ? styles.valid : styles.invalid
            }`}
          >
            {validationResult ? 'Valid UUID v4' : 'Invalid UUID v4'}
          </div>
        )}
      </section>
    </div>
  );
}
