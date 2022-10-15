import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import copy from 'copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import styles from '@/styles/uuid.module.scss';
import Layout from '@/layouts/Wrapper';
import { notifySuccess, notifyInfo } from '@/utils/notify';

const UniqueIDGenerator = () => {
  const [uuidIDs, setUUIDs] = useState([]);
  const [nanoIDs, setNanoIDs] = useState([]);
  const [uuidClicked, setUUIDClicked] = useState(false);
  const [nanoIdClicked, setNanoIDClicked] = useState(false);

  useEffect(() => {
    setUUIDs([uuidv4()]);
    setNanoIDs([nanoid()]);

    return () => {};
  }, []);

  const generateUUIDs = (numberOfIds = 1) => {
    const generateUniqueIds = [...Array(numberOfIds).keys()].map(() =>
      uuidv4()
    );

    setUUIDs(generateUniqueIds);

    if (!uuidClicked) setUUIDClicked(true);
  };

  const generateNanoID = (numberOfIds = 1) => {
    const nanoIds = [...Array(numberOfIds).keys()].map(() => nanoid());

    setNanoIDs(nanoIds);

    if (!nanoIdClicked) setNanoIDClicked(true);
  };

  const copyToClipboard = (type = 'uuid') => {
    const notifyOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    const copyOptions = {
      debug: true,
      format: 'text/plain',
      onCopy: (copiedData) =>
        notifySuccess('🎉 Copied to clipboard', notifyOptions),
    };

    switch (type) {
      case 'uuid':
        copy(uuidIDs[0], copyOptions);

        break;
      case 'nanoid':
        copy(nanoIDs[0], copyOptions);

        break;

      default:
        notifyInfo('Please select item to copy.', notifyOptions);
        break;
    }
  };

  return (
    <Layout
      title='Generate UUID'
      keywords='uuid, generate, uuidv4, javascript, uniqueid, uniquestrings, string, npm uuid, uuidv1'
    >
      <div className={styles.uuidIdPage} id={'unique-id-page'}>
        <div className='p-12 bg-gray-100 text-gray-700 border border-blue-700 rounded grid grid-flow-row sm:grid-flow-col gap-3 mb-4'>
          <div className='sm:col-span-1 text-center'>
            <h2 className='font-semibold text-4xl mb-4 mt-4'>Generate UUID</h2>

            <button
              type='button'
              className='inline-block px-6 py-2.5 mb-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              onClick={generateUUIDs}
            >
              {!uuidClicked ? 'Generate' : 'Generate another one'}
            </button>
          </div>

          <div className='sm:col-span-2 text-center' id='output-uuid'>
            <h2 className='font-semibold text-3xl mb-4'>UUIDs</h2>
            <ul>
              {uuidIDs.map((id) => (
                <li key={id} className='text-lg'>
                  <span>
                    {id}{' '}
                    <FaCopy
                      onClick={() => copyToClipboard('uuid')}
                      style={{
                        display: 'inline-block',
                        marginLeft: '0.5rem',
                        marginTop: '-0.5rem',
                        cursor: 'pointer',
                        color: '#0e4ac0',
                        fontSize: '1.5rem',
                      }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='p-12 bg-gray-100 text-gray-700 border border-blue-700 rounded grid grid-flow-row sm:grid-flow-col gap-3 mb-4'>
          <div className='sm:col-span-1 text-center'>
            <h2 className='font-semibold text-4xl mb-4 mt-4'>
              Generate NanoID
            </h2>

            <button
              type='button'
              className='inline-block px-6 py-2.5 mb-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              onClick={generateNanoID}
            >
              {!nanoIdClicked ? 'Generate' : 'Generate another one'}
            </button>
          </div>

          <div className='sm:col-span-2 text-center' id='output-nanoid'>
            <h2 className='font-semibold text-3xl mb-4'>NanoIDs</h2>
            <ul>
              {nanoIDs.map((id) => (
                <li key={id} className='text-xl'>
                  <span>
                    {id}{' '}
                    <FaCopy
                      onClick={() => copyToClipboard('nanoid')}
                      style={{
                        display: 'inline-block',
                        marginLeft: '0.5rem',
                        marginTop: '-0.5rem',
                        cursor: 'pointer',
                        color: '#0e4ac0',
                        fontSize: '1.5rem',
                      }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UniqueIDGenerator;
