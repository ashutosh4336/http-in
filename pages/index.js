import React, { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Layout from '@/layouts/Wrapper';

import CustomAlert from '@/components/Alert/CustomAlert';
import { AiFillInfoCircle } from 'react-icons/ai';

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
          <hr
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#000',
              border: 'none',
              margin: '20px 0',
            }}
          />
          <CustomAlert
            textAlign={'left'}
            textColor={'#fff'}
            backgroundColor={'red'}
            padding={'10px'}
            margin={'10px 0'}
            closeIconColor={'#fff'}
            height={'3rem'}
            border={'1px solid #333'}
          >
            <span>
              <AiFillInfoCircle
                style={{
                  display: 'inline-block',
                  marginRight: '0.5rem',
                  // marginTop: '-0.5rem',
                  color: '#fff',
                  fontSize: '1.5rem',
                }}
              />{' '}
              This is a danger alert Lorem ipsum, sdfsdfdsfdsfdsf
            </span>
          </CustomAlert>
        </main>
      </div>
    </Layout>
  );
}
