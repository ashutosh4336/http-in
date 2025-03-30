import React, { useState, useEffect } from 'react';
import {
  v4 as uuidv4,
  version as uuidVersion,
  validate as uuidValidate,
} from 'uuid';
import copy from 'copy-to-clipboard';
import { nanoid } from 'nanoid';
import { FaCopy } from 'react-icons/fa';
import { VscError } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';

import styles from '@/styles/uuid.module.scss';
import Layout from '@/layout/Wrapper';
import { notifySuccess, notifyInfo } from '@/utils/notify';
import CustomAlert from '@/components/Alert/CustomAlert';

const notifyOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const UniqueIDGenerator = () => {
  const [uuidInput, setUUIDInput] = useState('');
  const [uuidIDs, setUUIDs] = useState([]);
  const [nanoIDs, setNanoIDs] = useState([]);
  const [uuidClicked, setUUIDClicked] = useState(false);
  const [nanoIdClicked, setNanoIDClicked] = useState(false);
  const [isValidUUID, setIsValidUUID] = useState(null);

  const inputExist = uuidInput.length > 0;

  useEffect(() => {
    setUUIDs([uuidv4()]);
    setNanoIDs([nanoid()]);

    return () => {};
  }, []);

  const handleInputUpdate = (e) => {
    if (isValidUUID !== null) {
      setIsValidUUID(null);
    }

    const value = e?.target?.value;

    setUUIDInput(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const optimizedFn = useCallback(debounce(handleInputUpdate), []);

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

  const uuidValidateV4 = (uuid) => {
    // console.log(80, uuid);
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uuidValidateV4(uuidInput)) {
      setIsValidUUID(true);
    } else {
      setIsValidUUID(false);
    }
  };

  const closeAlert = () => {
    setIsValidUUID(null);
  };

  return (
    <Layout
      title='Generate UUID'
      keywords='uuid, generate, uuidv4, javascript, uniqueid, uniquestrings, string, npm uuid, uuidv1'
    >
      <div className={styles.uuidIdPage} id={'unique-id-page'}>
        <div
          className={`${styles.uuidBox} p-12 bg-gray-100 text-gray-700 grid grid-flow-row sm:grid-flow-col gap-3 mt-4`}
        >
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
                        color: '#374151',
                        fontSize: '1.5rem',
                      }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${styles.uuidBox} p-12 bg-gray-100 text-gray-700 grid grid-flow-row sm:grid-flow-col gap-3 mt-4`}
        >
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
                        color: '#374151',
                        fontSize: '1.5rem',
                      }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className={styles.horizontalLine} />

        <div className={styles.checkUUID}>
          <form onSubmit={handleSubmit} className='mb-4'>
            <div className='relative'>
              <input
                value={uuidInput}
                onChange={handleInputUpdate}
                type='text'
                name='uuid'
                id='validate-uuid'
                className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Validate if the the String is a valid UUID'
                required
              />
              <button
                type='submit'
                disabled={!inputExist}
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Check
              </button>
            </div>
          </form>

          <div className={styles.uuidAlertContainer}>
            {inputExist && isValidUUID === true ? (
              <CustomAlert
                textAlign={'left'}
                textColor={'#fff'}
                backgroundColor={'#0e4ac0'}
                padding={'10px'}
                margin={'10px 0'}
                closeIconColor={'#fff'}
                height={'3rem'}
                border={'1px solid #333'}
                clickHandler={closeAlert}
              >
                <span>
                  <TiTick
                    style={{
                      display: 'inline-block',
                      marginRight: '0.5rem',
                      color: '#fff',
                      fontSize: '1.5rem',
                    }}
                  />
                  Yes, it&apos;s a Valid UUId
                </span>
              </CustomAlert>
            ) : null}

            {inputExist && isValidUUID === false ? (
              <CustomAlert
                textAlign={'left'}
                textColor={'#fff'}
                backgroundColor={'#0e4ac0'}
                padding={'10px'}
                margin={'10px 0'}
                closeIconColor={'#fff'}
                height={'3rem'}
                border={'1px solid #333'}
                clickHandler={closeAlert}
              >
                <span>
                  <VscError
                    style={{
                      display: 'inline-block',
                      marginRight: '0.5rem',
                      color: '#fff',
                      fontSize: '1.5rem',
                    }}
                  />
                  No, it isn&apos;t Valid UUId
                </span>
              </CustomAlert>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UniqueIDGenerator;
