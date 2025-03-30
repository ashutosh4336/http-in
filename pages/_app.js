// add bootstrap css
import '../src/styles/globals.scss';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import router from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import { publicIpv4 } from 'public-ip';
import * as rdd from 'react-device-detect';
import * as localForage from 'localforage';
import { getOS, isDeepEqual, normalizeJson } from '@/utils/util';

NProgress.configure({ showSpinner: false });

// NodeJS.Timeout
let progressBarTimeout;

const startProgressBar = () => {
  clearTimeout(progressBarTimeout);
  progressBarTimeout = setTimeout(NProgress.start, 200);
};

const stopProgressBar = () => {
  clearTimeout(progressBarTimeout);
  NProgress.done();
};

router.events.on('routeChangeStart', startProgressBar);
router.events.on('routeChangeComplete', stopProgressBar);
router.events.on('routeChangeError', stopProgressBar);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setClientInfo();

    return () => {};
  }, []);

  async function setClientInfo() {
    try {
      const clientInfo = (await localForage.getItem('clientInfo')) ?? '{}';
      const clientInfoObj = JSON.parse(clientInfo);

      const publicIpV4 = await publicIpv4();
      const userAgent = rdd.parseUserAgent(window.navigator.userAgent);
      const { os = {}, browser = {} } = userAgent;

      // const clientInfoExist = Object.keys(clientInfoObj).length > 0;
      // const ipIsSame =
      //   Object.prototype.hasOwnProperty.call(clientInfoObj, 'ipv4') &&
      //   clientInfoObj.ipv4 === publicIpV4;

      delete userAgent.os;
      delete userAgent.browser;

      const clientMeta = normalizeJson({
        os,
        browser,
        isDesktop: rdd.isDesktop,
        isMobile: rdd.isMobile,
        isChrome: rdd.isChrome,
        isFirefox: rdd.isFirefox,
        isIE: rdd.isIE,
        ipv4: publicIpV4,
        userAgent,
      });
      // ipv6: await publicIpv6(),

      const isEqual = isDeepEqual(clientInfoObj, clientMeta);
      // console.log({ isEqual, clientMeta, clientInfoObj });

      if (isEqual) return;

      localForage.setItem('clientInfo', JSON.stringify(clientMeta));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Script
        async
        script-src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9232405558310752'
        crossOrigin='anonymous'
        id='AdSense'
        data-ad-client='ca-pub-9232405558310752'
        strategy='afterInteractive'
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
        onReady={(e) => {
          console.log('Script ready');
        }}
      />
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}

export default MyApp;
