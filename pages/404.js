import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/layouts/Wrapper';
import styles from '@/styles/404.module.scss';

export default function NotFound() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          {/* <FaExclamationTriangle color='3e3e3e' /> */}
          404
        </h1>
        <h4>Sorry, There is nothing here. 😞</h4>
        <Link href={'/'}>
          <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
            Go Back Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
