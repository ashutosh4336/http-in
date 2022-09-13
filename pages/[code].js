import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layouts/Wrapper';

export default function SingleCode() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <Layout title={`HTTP || ${code}`}>
      <h1>SingleCode {code}</h1>
    </Layout>
  );
}
