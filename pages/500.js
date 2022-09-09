import Link from 'next/link';
// import Image from 'next/image';

export default function InternalServerError() {
  return (
    <div className={'internal-server-error'}>
      Internal Server Error
      <Link href={'/'}>
        <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
          Go Back to Home
        </a>
      </Link>
    </div>
  );
}
