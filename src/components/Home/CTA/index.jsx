'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const MotionDiv = motion.div;

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.ctaText}
        >
          <h2>Ready to Get Started?</h2>
          <p>
            Start exploring our comprehensive resources and tools for web
            development.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.ctaButtons}
        >
          <Link href='/codes' className={styles.primaryButton}>
            Explore Status Codes
            <FaArrowRight />
          </Link>
          <Link href='/uuid' className={styles.secondaryButton}>
            Generate UUIDs
            <FaArrowRight />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
