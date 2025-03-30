const MEAT_DATA_ENDPOINT = 'api/v1/metadata';

function checkOS(n) {
  if (n.userAgentData) {
    const hints = [
      'architecture',
      'model',
      'platform',
      'platformVersion',
      'uaFullVersion',
    ];
    return n.userAgentData.getHighEntropyValues(hints).then((ua) => ua);
  } else {
    return {};
  }
}

const getFingerprint = async () => {
  const osDetails = await checkOS(navigator);

  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    colorDepth: window.screen.colorDepth,
    deviceMemory: navigator?.deviceMemory || 0,
    hardwareConcurrency: navigator.hardwareConcurrency,
    timezoneOffset: new Date().getTimezoneOffset(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    isMobile: osDetails.mobile,
    architecture: osDetails.architecture,
    model: osDetails.model,
    platformVersion: osDetails.platformVersion,
    uaFullVersion: osDetails.uaFullVersion,
    brand: osDetails.brands
      ?.map(
        (br, index) =>
          `${br?.brand} ${br?.version} ${
            index === osDetails.brands.length - 1 ? '' : '|'
          }`
      )
      .join(' '),
  };

  // Generate a hash from the collected data
  const fingerprintString = JSON.stringify(fingerprint);

  let hash = 0,
    i,
    chr;

  for (i = 0; i < fingerprintString.length; i++) {
    chr = fingerprintString.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return { fingerprint, hash };
};

const getIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');

    if (!response.ok) throw new Error('Failed to get IP Address');

    const data = await response.json();

    return data?.ip ?? '';
  } catch (error) {
    console.log(error);
    return '';
  }
};

const isOnProduction = () => {
  const { hostname, protocol } = window.location;
  return `${protocol}//${hostname}` === 'https://me.thehttp.in';
};

(async () => {
  try {
    if (!isOnProduction()) return 'Not on production...';

    const ip = await getIP();
    const { fingerprint, hash } = await getFingerprint();
    const visitorData = { ip, ...fingerprint, hash };
    const visitorDataFromLocalStorage = localStorage.getItem(Math.abs(hash));

    if (
      !!visitorDataFromLocalStorage &&
      visitorDataFromLocalStorage === JSON.stringify(visitorData)
    ) {
      return 'Data already stored';
    }

    localStorage.setItem(Math.abs(hash), JSON.stringify(visitorData));

    const response = await fetch(MEAT_DATA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitorData),
    });

    if (!response.ok) {
      throw new Error('Failed to store IP Address');
    }
    return response;
  } catch (error) {
    console.log(error);
  }
})();
