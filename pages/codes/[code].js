import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../src/layout/Wrapper';
import styles from '../../src/styles/Codes.module.scss';
import { httpStatusCodes } from '../../src/data/statusCodes';

// Helper function to determine category and color based on status code
const getCategoryAndColor = (code) => {
  if (code >= 100 && code < 200) {
    return { category: 'Informational', color: '#2196F3' };
  } else if (code >= 200 && code < 300) {
    return { category: 'Success', color: '#4CAF50' };
  } else if (code >= 300 && code < 400) {
    return { category: 'Redirection', color: '#FFC107' };
  } else if (code >= 400 && code < 500) {
    return { category: 'Client Error', color: '#F44336' };
  } else if (code >= 500 && code < 600) {
    return { category: 'Server Error', color: '#FF9800' };
  } else {
    return { category: 'Custom', color: '#9E9E9E' };
  }
};

const StatusCodePage = () => {
  const router = useRouter();
  const { code } = router.query;

  // Find the status code in our data
  const statusCode = httpStatusCodes.find((sc) => sc.code.toString() === code);

  if (!statusCode) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.noResults}>
            <div className={styles.noResultsContent}>
              <h2>Status Code Not Found</h2>
              <p>No status code found with number {code}</p>
              <div className={styles.noResultsImage}>
                <div className={styles.noResultsCode}>404</div>
              </div>
              <button
                className={styles.moreButton}
                onClick={() => router.push('/codes')}
                style={{
                  '--button-color': '#2196f3',
                  '--button-hover-bg': '#2196f3',
                  '--button-hover-text': '#ffffff',
                }}
              >
                Back to All Status Codes
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const { category, color } = getCategoryAndColor(statusCode.code);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>HTTP Status Code {statusCode.code}</h1>
          {/* <p>{statusCode.title}</p> */}
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
            <button
              className={styles.backButton}
              onClick={() => router.push('/codes')}
              style={{
                '--button-color': color,
                '--button-hover-bg': color,
                '--button-hover-text': '#ffffff',
              }}
            >
              Back to All Status Codes
            </button>
            <a
              href={`/codes/${code}/raw`}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.rawLink}
              style={{
                '--button-color': color,
                '--button-hover-bg': color,
                '--button-hover-text': '#ffffff',
              }}
            >
              View Raw JSON
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatusCodePage;
