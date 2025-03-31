import { notFound } from 'next/navigation';
import { httpStatusCodes } from '@/data/statusCodes';
import styles from '@/styles/Codes.module.scss';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export async function generateMetadata({ params }) {
  const code = params.code;
  const statusCode = httpStatusCodes.find((c) => c.code.toString() === code);

  if (!statusCode) {
    return {
      title: 'Status Code Not Found',
    };
  }

  return {
    title: `HTTP ${statusCode.code} - ${statusCode.title}`,
    description: statusCode.description,
  };
}

export default function RawStatusCodePage({ params }) {
  const { code } = params;

  const statusCode = httpStatusCodes.find((c) => c.code.toString() === code);

  if (!statusCode) return notFound();

  delete statusCode.color;

  statusCode.source = new URL('https://thehttp.in').toString();
  statusCode.author = new URL('https://me.thehttp.in').toString();

  return (
    <div className={styles.container}>
      <h1>HTTP Status Code {code}</h1>
      <pre className={styles.codeBlock}>
        <code>{JSON.stringify(statusCode, null, 2)}</code>
      </pre>

      <Link href='/'>
        <button className={styles.backButton}>
          <FaArrowLeft /> Back
        </button>
      </Link>
    </div>
  );
}
