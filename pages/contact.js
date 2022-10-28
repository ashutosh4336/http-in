import Layout from '@/src/layouts/Wrapper';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Contact() {
  const handleContactUs = (e) => {
    e.preventDefault();
    console.log('Contact us');
  };

  return (
    <Layout>
      <div
        style={{ margin: '0 auto', height: 'auto', marginBottom: '10vh' }}
        className='flex flex-col items-center justify-center w-9/12'
      >
        <h3 className='text-5xl font-bold my-10'>Contact Us</h3>

        <div className='w-10/12'>
          <div className='flex justify-center items-center'>
            <div className='p-5 bg-slate-800 w-3/4 rounded-lg'>
              <form
                className='p-3 flex flex-col space-y-5'
                onSubmit={handleContactUs}
              >
                <p className='text-xl text-center text-white'>Contact Us</p>

                <input
                  className='p-3 rounded-lg bg-gray-100'
                  type='email'
                  placeholder='email'
                />
                <input
                  type='text'
                  placeholder='Subject'
                  min={10}
                  max={120}
                  className='p-3 rounded-lg bg-gray-100'
                />
                <textarea
                  style={{ resize: 'none' }}
                  type='text'
                  placeholder='Message'
                  className='p-3 rounded-lg bg-gray-100'
                  rows={8}
                  maxLength={500}
                  minLength={10}
                />
                <button
                  style={{ marginTop: '2.5rem' }}
                  type='submit'
                  className='p-2 bg-emerald-600 rounded text-white'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export function useOnClickOutside(ref, handler) {
//   useEffect(() => {
//     const listener = (event) => {
//       // Do nothing if clicking ref's element or descendent elements
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);
//     document.addEventListener('touchstart', listener);
//     return () => {
//       document.removeEventListener('mousedown', listener);
//       document.removeEventListener('touchstart', listener);
//     };
//   }, [ref, handler]);

//   return null;
// }

/**
 *    <section className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-4xl font-bold'>Privacy Policy</h1>

          <p className='mt-3 text-xl'>Get in touch with us</p>

          <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
           
            <a
              href='https://twitter.com/thehttpin'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Twitter &rarr;</h3>
              <p className='mt-4 text-xl'>Follow us on Twitter</p>
            </a>

            <a
              href='mailto:ashutohspanda575@gmail.com'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Email &rarr;</h3>
              <p className='mt-4 text-xl'>Send us an email</p>
            </a>
          </div>
        </section>


// comments

         <div className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'> 
 */
