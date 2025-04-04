'use client';

import { useState } from 'react';
import {
  v4 as uuidv4,
  validate as uuidValidate,
  version as uuidVersion,
} from 'uuid';
import styles from '@/styles/Uuid.module.scss';

export default function UuidContent() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState([]);
  const [validationInput, setValidationInput] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const generateUuids = () => {
    const newUuids = Array.from({ length: count }, () => uuidv4());
    setUuids(newUuids);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const validateUuid = (uuid) => {
    const isValid = uuidValidate(uuid);
    const version = isValid ? uuidVersion(uuid) : null;

    if (!isValid) {
      return {
        isValid: false,
        message: 'Invalid UUID format',
      };
    }

    return {
      isValid: true,
      message: `Valid UUID for version: ${version}`,
    };
  };

  const handleValidationChange = (e) => {
    const value = e.target.value;
    setValidationInput(value);
    if (value) {
      setValidationResult(validateUuid(value));
    } else {
      setValidationResult(null);
    }
  };

  return (
    <div className={styles.uuidIdPage}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>UUID Generator</h1>
          <p>Generate UUIDs v4 with a single click</p>
          <div className={styles.inputGroup}>
            <input
              type='number'
              min='1'
              max='10'
              value={count}
              onChange={(e) =>
                setCount(
                  Math.min(10, Math.max(1, parseInt(e.target.value) || 1))
                )
              }
              className={styles.input}
            />
            <button onClick={generateUuids} className={styles.button}>
              Generate
            </button>
          </div>
          <div className={styles.output}>
            {uuids.map((uuid, index) => (
              <div key={index} className={styles.uuidItem}>
                <span>{uuid}</span>
                <button
                  onClick={() => copyToClipboard(uuid)}
                  className={styles.button}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>UUID Validator</h2>
          <p>Check if a string is a valid UUID</p>
          <div className={styles.inputGroup}>
            <input
              type='text'
              value={validationInput}
              onChange={handleValidationChange}
              placeholder='Enter UUID to validate'
              className={styles.input}
            />
          </div>
          {validationResult && (
            <div
              className={`${styles.validationResult} ${
                validationResult.isValid ? styles.valid : styles.invalid
              }`}
            >
              {validationResult.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
