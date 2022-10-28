import React, { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Layout from '@/layouts/Wrapper';

export default function Home() {
  return (
    <Layout htmlClasses={' layout12345'}>
      <div className={`${styles.container}`}>
        <main>
          <p
            className={`${styles.curlLink} mt-4 text-center text-2xl font-bold underline`}
          >
            curl -X GET https://thehttp.in/api/ping
          </p>

          <h1>Hello</h1>
        </main>
      </div>
    </Layout>
  );
}
