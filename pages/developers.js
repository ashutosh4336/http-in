import React from 'react';
import Layout from '@/layouts/Wrapper';

export default function Developer() {
  return (
    <Layout title='Developer Area'>
      <div className='mt-10'>Developer Me</div>
      <div className='globals'>
        <h1>Developer</h1>
        <a href='https://ashutosh.app' target='_blank' rel='noreferrer'>
          Visit my Portfolio
        </a>
      </div>
    </Layout>
  );
}
