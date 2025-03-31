'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/Codes.module.scss';
import { httpStatusCodes as statusCodes } from '@/data/statusCodes';
import { getCategoryAndColor } from '@/utils/util';

export default function StatusCodePage() {
  const { code } = useParams();

  const statusCode = statusCodes.find((sc) => sc.code === parseInt(code));

  if (!statusCode) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.noResults}>
          <div className={styles.noResultsContent}>
            <h2>Status Code Not Found</h2>
            <p>No status code found with number {code}</p>
            <div className={styles.noResultsImage}>
              <div className={styles.noResultsCode}>404</div>
            </div>
            <Link href='/codes' className={styles.moreButton}>
              Back to All Status Codes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { category, color } = getCategoryAndColor(statusCode.code);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>HTTP Status Code {statusCode.code}</h1>
      </div>

      <div className={styles.singleCodeContainer}>
        <div className={styles.singleCodeHeader}>
          <div
            className={styles.singleCodeImage}
            style={{ backgroundColor: color }}
          >
            <div className={styles.statusCode}>{statusCode.code}</div>
          </div>
          <div className={styles.singleCodeInfo}>
            <span
              className={styles.category}
              style={{ backgroundColor: color }}
            >
              {category}
            </span>
            <h2>{statusCode.title}</h2>
            <p className={styles.description}>{statusCode.description}</p>
          </div>
        </div>

        <div className={styles.singleCodeDetails}>
          <h3>Detailed Information</h3>
          <p>{statusCode.details}</p>
        </div>

        <div className={styles.buttonContainer}>
          <Link href='/codes' className={styles.backButton}>
            Back to All Status Codes
          </Link>
          <Link
            href={`/codes/${code}/raw`}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.rawLink}
          >
            View Raw JSON
          </Link>
        </div>
      </div>
    </div>
  );
}
