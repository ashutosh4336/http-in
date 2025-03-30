'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder with the same dimensions during SSR
  if (!mounted) return null;

  return (
    <Link href='/' className={styles.logo}>
      <div className={styles.logoContent}>
        <span className={styles.the}>The</span>
        <span className={styles.http}>HTTP</span>
      </div>
    </Link>
  );
};

export default Logo;
