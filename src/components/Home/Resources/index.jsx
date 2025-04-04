'use client';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import resources from '@/data/resources';
import LearnMoreBtn from '@/components/shared/LearnMoreBtn';

// Dynamically import motion components with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  { ssr: false }
);

export default function Resources() {
  return (
    <section className={styles.features}>
      <MotionH2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore Our Resources
      </MotionH2>
      <div className={styles.featureGrid}>
        {resources.map((resource) => (
          <MotionDiv
            key={resource.id}
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + resource.id * 0.1 }}
          >
            <div className={styles.featureIcon}>{resource.icon}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>

            <LearnMoreBtn
              href={resource.link}
              text='Learn More'
              target='_blank'
              className={styles.featureLink}
              icon={<FaArrowRight />}
            />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
