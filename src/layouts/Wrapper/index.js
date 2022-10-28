'use strict';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from '@/styles/Layouts.module.scss';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  keywords: PropTypes.string,
};

Layout.defaultProps = {
  title: 'TheHTTP',
  description: 'HTTP / HTTPS requests and API conventions',
  keywords: 'http, https, backend, client, api, rest',
};

export default function Layout({
  title,
  keywords,
  htmlClasses,
  description,
  faviconIcon = '/favicon.ico',
  children,
}) {
  return (
    <div className={styles.wrapper + htmlClasses || ''}>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href={faviconIcon} />
      </Head>

      <section className={styles.navSection}>{/* <Navbar /> */}</section>

      <main className={styles.container}>{children}</main>

      <section className={'main-footer'}>
        <Footer />
        <ToastContainer className='http-toast-container' />
      </section>
    </div>
  );
}
