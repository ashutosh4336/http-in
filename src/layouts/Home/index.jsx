'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.scss';
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaArrowRight,
} from 'react-icons/fa';
import Link from 'next/link';

const howWebWorks = [
  {
    number: '1',
    title: 'DNS Resolution',
    description:
      'When you enter a URL, your browser first needs to find the IP address of the server. This is done through DNS resolution, where your request goes through various DNS servers until it finds the correct IP address.',
  },
  {
    number: '2',
    title: 'TCP Connection',
    description:
      'Once the IP is found, your browser establishes a TCP connection with the server through a three-way handshake process, ensuring reliable communication.',
  },
  {
    number: '3',
    title: 'HTTP Request',
    description:
      'Your browser sends an HTTP request to the server, specifying the resource you want to access and any additional headers or data.',
  },
  {
    number: '4',
    title: 'Server Response',
    description:
      'The server processes your request and sends back an HTTP response with the requested resource and a status code indicating the result.',
  },
];

// Dynamically import motion components with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  {
    ssr: false,
  }
);
export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1>Understanding HTTP & Web Protocols</h1>
          <p>
            Explore the world of web communication, DNS, and networking
            protocols
          </p>
          <div className={styles.heroButtons}>
            <Link href='/codes' className={styles.primaryButton}>
              <span>Browse Status Codes</span>
            </Link>
            <Link href='/docs' className={styles.secondaryButton}>
              <span>Read Documentation</span>
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore Our Features
        </MotionH2>
        <div className={styles.featureGrid}>
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaServer className={styles.featureIcon} />
            <h3>HTTP Status Codes</h3>
            <p>Comprehensive guide to HTTP status codes and their meanings</p>
            <Link href='/codes' className={styles.featureLink}>
              <span>
                Learn More <FaArrowRight />
              </span>
            </Link>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaNetworkWired className={styles.featureIcon} />
            <h3>DNS & Caching</h3>
            <p>Learn about DNS resolution and caching mechanisms</p>
            <Link href='/docs#dns' className={styles.featureLink}>
              <span>
                Learn More <FaArrowRight />
              </span>
            </Link>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaShieldAlt className={styles.featureIcon} />
            <h3>Security Protocols</h3>
            <p>Understanding HTTPS, SSL/TLS, and web security</p>
            <Link href='/docs#security' className={styles.featureLink}>
              <span>
                Learn More <FaArrowRight />
              </span>
            </Link>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaGlobe className={styles.featureIcon} />
            <h3>Web Communication</h3>
            <p>Explore how data flows across the internet</p>
            <Link href='/docs#communication' className={styles.featureLink}>
              <span>
                Learn More <FaArrowRight />
              </span>
            </Link>
          </MotionDiv>
        </div>
      </section>

      {/* How Web Works Section */}
      <section className={styles.howWebWorks}>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          How the Web Works
        </MotionH2>
        <div className={styles.processSteps}>
          {howWebWorks.map((step, index) => (
            <MotionDiv
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* DNS Caching Section */}
      <section className={styles.dnsCaching}>
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          DNS Caching
        </MotionH2>
        <div className={styles.cachingInfo}>
          <MotionDiv
            className={styles.cachingLevels}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h3>Levels of DNS Caching</h3>
            <ul>
              <li>Browser DNS Cache</li>
              <li>Operating System DNS Cache</li>
              <li>Router DNS Cache</li>
              <li>ISP DNS Cache</li>
              <li>Root DNS Servers</li>
            </ul>
          </MotionDiv>
          <MotionDiv
            className={styles.cachingBenefits}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h3>Benefits of DNS Caching</h3>
            <ul>
              <li>Faster website loading times</li>
              <li>Reduced load on DNS servers</li>
              <li>Improved reliability</li>
              <li>Better user experience</li>
            </ul>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
