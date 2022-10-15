import React, { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Layout from '@/layouts/Wrapper';
import TailwindHorizontalCard from '@/components/Card/TailwindHorizontalCard';
import TailwindPagination from '@/components/Pagination/TailwindPagination';
import { notifySuccess } from '@/utils/notify';

// import FAlert from '@/components/FlowBiteAlert';
// import FCardWithImage from '@/src/components/Card/FCardImage';

export default function Home() {
  const [openAlert, setOpenAlert] = useState(false);

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
          {/* <h1 className={styles.title}>http.in</h1> */}
          {/* <pre className='code-section text-3xl font-bold underline'>
            curl -X GET http://http.in/api/ping
          </pre> */}

          <TailwindHorizontalCard cardTitle={'HTTP - Code -  100'} />
          <TailwindHorizontalCard cardTitle={'HTTP - Code -  101'} />
          <TailwindPagination />

          {/* <FCardWithImage />
          <FCardWithImage />
          <FCardWithImage />
          <FCardWithImage /> */}
          {/* <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4'
            onClick={() => notifySuccess('Success')}
          >
            Show Toast ✅
          </button> */}
        </main>
      </div>
    </Layout>
  );
}
