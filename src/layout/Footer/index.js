import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>HTTP Status Codes</h3>
            <p>Comprehensive guide to HTTP status codes and their meanings.</p>
            <div className={styles.links}>
              <Link href='/codes'>Browse Codes</Link>
              <Link href='/docs'>Documentation</Link>
              <Link href='/about'>About</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Resources</h3>
            <div className={styles.links}>
              <Link href='/docs'>Documentation</Link>
              <Link href='/api'>API Reference</Link>
              <Link href='/examples'>Examples</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Community</h3>
            <div className={styles.socialLinks}>
              <a
                href='https://github.com/yourusername/http-in'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>
              <a
                href='https://twitter.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a
                href='https://linkedin.com/in/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Made with <FaHeart className={styles.heart} /> by{' '}
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
            >
              Your Name
            </a>
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} HTTP Status Codes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
