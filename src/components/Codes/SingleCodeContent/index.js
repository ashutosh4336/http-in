'use client';
import styles from '@/styles/Codes.module.scss';
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function SingleCodeContent({ statusCode, code }) {
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
              <FaArrowLeft /> Back to All Status Codes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>HTTP Status Code {statusCode.code}</h1>
      </div>

      <div className={styles.singleCodeContainer}>
        <div className={styles.singleCodeHeader}>
          <div
            className={styles.singleCodeImage}
            style={{ backgroundColor: statusCode.color }}
          >
            <div className={styles.statusCode}>{statusCode.code}</div>
          </div>
          <div className={styles.singleCodeInfo}>
            <span
              className={styles.category}
              style={{ backgroundColor: statusCode.color }}
            >
              {statusCode.category}
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
            <FaArrowLeft /> Back to All Status Codes
          </Link>
          <Link
            href={`/codes/${code}/raw`}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.backButton}
          >
            View Raw JSON <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
