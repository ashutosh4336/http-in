import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
// import styles from '@/styles/Layouts.module.scss';

const inter = Inter({ subsets: ['latin'] });

const url = new URL('https://thehttp.in');
const authorURL = new URL('https://me.thehttp.in');

export const metadata = {
  title: 'TheHTTP',
  description: 'HTTP / HTTPS requests and API conventions',
  applicationName: 'TheHTTP',
  keywords: 'http, https, backend, client, api, rest',
  metadataBase: url,
  authors: [
    { name: 'TheHTTP', url },
    { name: 'Ashutosh Panda', url: authorURL },
    { name: 'Ashutosh4336', url: authorURL },
  ],

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <div className='wrapper'>
          <Navbar />
          <div className='content-wrapper'>
            <main>{children}</main>
          </div>
          <div className='footerContainer main-footer'>
            <Footer />
          </div>
        </div>
        <ToastContainer className='http-toast-container' />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
