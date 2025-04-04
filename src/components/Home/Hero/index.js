'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './style.module.scss';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Dynamically import motion components with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroContent}
      >
        <h1>Web Development Resources & Tools</h1>
        <p>
          Your comprehensive guide to web development, networking protocols, and
          cloud technologies. Learn, explore, and build better web applications.
        </p>
        <div className={styles.heroButtons}>
          <Link href='/codes' className={styles.primaryButton}>
            <span>Explore Resources</span>
            <FaArrowRight className={styles.arrowIcon} />
          </Link>
          <Link href='/docs' className={styles.secondaryButton}>
            <span>Read Documentation</span>
          </Link>
        </div>
      </MotionDiv>
    </section>
  );
}
