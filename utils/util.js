export const getOS = () => {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};

export const isDeepEqual = (object1, object2) => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

export const isObject = (object) => {
  return object != null && typeof object === 'object';
};

export const checkDataType = (value) => {
  if (value === null) return 'null';

  if (typeof value === 'undefined') return 'undefined';
  else if (typeof value === 'string' && Array.isArray(value)) return 'array';
  else if (typeof value === 'object') return 'object';
  else if (typeof value === 'string') return 'string';
  else if (typeof value === 'number') return 'number';
  else if (typeof value === 'boolean') return 'boolean';
};

export const normalizeJson = (json) => {
  return JSON.parse(JSON.stringify(json));
};

// Helper function to determine category and color based on status code
export const getCategoryAndColor = (code) => {
  if (code >= 100 && code < 200) {
    return { category: 'Informational', color: '#2196F3' };
  } else if (code >= 200 && code < 300) {
    return { category: 'Success', color: '#4CAF50' };
  } else if (code >= 300 && code < 400) {
    return { category: 'Redirection', color: '#FFC107' };
  } else if (code >= 400 && code < 500) {
    return { category: 'Client Error', color: '#F44336' };
  } else if (code >= 500 && code < 600) {
    return { category: 'Server Error', color: '#FF9800' };
  } else {
    return { category: 'Custom', color: '#9E9E9E' };
  }
};
