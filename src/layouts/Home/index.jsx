'use client';

import styles from '@/styles/Home.module.scss';
import React from 'react';
import Hero from '@/components/Home/Hero';
import Resources from '@/components/Home/Resources';
import BlogSection from '@/components/Home/BlogSection';
import CTA from '@/components/Home/CTA';
import Divider from '@/components/shared/Divider';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero />

      <Divider />

      {/* Resources Section */}
      <Resources />

      <Divider />

      {/* Blog Section */}
      <BlogSection />

      <Divider />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
