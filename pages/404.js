import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={'internal-server-error'}>
      Page not found
      <Link href={'/'}>
        <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
          Go Back to Home
        </a>
      </Link>
    </div>
  );
}
