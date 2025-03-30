import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHeart,
  FaInstagram,
  FaGlobe,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

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
                href='https://github.com/ashutosh4336'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>
              <a
                href='https://twitter.com/ashutosh4336'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a
                href='https://linkedin.com/in/ashutosh4336'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://www.instagram.com/0xashutosh4336'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.me.thehttp.in'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.madeWith}>
            Made with <FaHeart className={styles.heart} />
            &nbsp;{'&'}&nbsp;
            <a
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <RiNextjsFill className={styles.nextjs} />
            </a>
            by
            <a
              href='https://me.thehttp.in/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ashutosh
            </a>
          </p>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()}{' '}
            <span className={styles.theHTTP}>TheHTTP</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
