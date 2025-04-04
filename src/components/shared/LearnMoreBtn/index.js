import React from 'react';
import styles from './style.module.scss';
// import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function LearnMoreBtn({ href, text, className, icon, target }) {
  return (
    <>
      <Link
        href={href}
        target={target}
        rel='noopener noreferrer'
        className={`${styles.readMore} ${className}`}
      >
        {text} {icon}
      </Link>
    </>
  );
}
