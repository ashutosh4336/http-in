import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
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
