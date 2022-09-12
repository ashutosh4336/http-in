import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';

import styles from '@/styles/Home.module.scss';

import FAlert from '@/components/FlowBiteAlert';

import Layout from '@/layouts/Wrapper';

export default function Home() {
  const [openAlert, setOpenAlert] = useState(false);

  const notify = () =>
    toast.success('🦄 Hello world !', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const toggleOpenAlert = () => {
    setOpenAlert((ps) => !ps);
  };

  const openAlertFn = () => {
    setOpenAlert(true);

    setTimeout(() => setOpenAlert(false), 5000);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>http.in</h1>
          <pre className='code-section text-3xl font-bold underline'>
            curl -X GET http://http.in/api/ping
          </pre>
          {openAlert ? (
            <FAlert text={'Hi There.'} closeAlert={toggleOpenAlert} />
          ) : null}

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={notify}
          >
            Show Toast ✅
          </button>
        </main>
      </div>
    </Layout>
  );
}
