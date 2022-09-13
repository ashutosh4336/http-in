import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function TailwindPagination() {
  return (
    <div>
      <div className='flex justify-center'>
        <nav aria-label='Page navigation example'>
          <ul className='flex list-style-none'>
            <li className='page-item disabled'>
              <Link href='#'>
                <a
                  className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none'
                  tabIndex='-1'
                  aria-disabled='true'
                >
                  Previous
                </a>
              </Link>
            </li>

            <li className='page-item'>
              <Link href='#'>
                <a className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'>
                  1
                </a>
              </Link>
            </li>

            <li className='page-item active'>
              <Link href='#'>
                <a className='page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'>
                  2{/* <span className='visually-hidden'>(current)</span> */}
                </a>
              </Link>
            </li>

            <li className='page-item'>
              <Link href='#'>
                <a className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'>
                  3
                </a>
              </Link>
            </li>

            <li className='page-item'>
              <Link href='#'>
                <a className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'>
                  Next
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
