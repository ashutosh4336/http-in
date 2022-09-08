const rawStatus = [
  '100 Continue',
  '101 Switching Protocols',
  '102 Processing (WebDAV; RFC 2518)',
  '103 Early Hints (RFC 8297)',
  '200 OK',
  '201 Created',
  '202 Accepted',
  '203 Non-Authoritative Information (since HTTP/1.1)',
  '204 No Content',
  '205 Reset Content',
  '206 Partial Content (RFC 7233)',
  '207 Multi-Status (WebDAV; RFC 4918)',
  '208 Already Reported (WebDAV; RFC 5842)',
  '226 IM Used (RFC 3229)',
  '300 Multiple Choices',
  '301 Moved Permanently',
  '302 Found (Previously "Moved temporarily")',
  '303 See Other (since HTTP/1.1)',
  '304 Not Modified (RFC 7232)',
  '305 Use Proxy (since HTTP/1.1)',
  '306 Switch Proxy',
  '307 Temporary Redirect (since HTTP/1.1)',
  '308 Permanent Redirect (RFC 7538)',
  '400 Bad Request',
  '401 Unauthorized (RFC 7235)',
  '402 Payment Required',
  '403 Forbidden',
  '404 Not Found',
  '405 Method Not Allowed',
  '406 Not Acceptable',
  '407 Proxy Authentication Required (RFC 7235)',
  '408 Request Timeout',
  '409 Conflict',
  '410 Gone',
  '411 Length Required',
  '412 Precondition Failed (RFC 7232)',
  '413 Payload Too Large (RFC 7231)',
  '414 URI Too Long (RFC 7231)',
  '415 Unsupported Media Type (RFC 7231)',
  '416 Range Not Satisfiable (RFC 7233)',
  '417 Expectation Failed',
  "418 I'm a teapot (RFC 2324, RFC 7168)",
  '421 Misdirected Request (RFC 7540)',
  '422 Unprocessable Entity (WebDAV; RFC 4918)',
  '423 Locked (WebDAV; RFC 4918)',
  '424 Failed Dependency (WebDAV; RFC 4918)',
  '425 Too Early (RFC 8470)',
  '426 Upgrade Required',
  '428 Precondition Required (RFC 6585)',
  '429 Too Many Requests (RFC 6585)',
  '431 Request Header Fields Too Large (RFC 6585)',
  '451 Unavailable For Legal Reasons (RFC 7725)',
  '500 Internal Server Error',
  '501 Not Implemented',
  '502 Bad Gateway',
  '503 Service Unavailable',
  '504 Gateway Timeout',
  '505 HTTP Version Not Supported',
  '506 Variant Also Negotiates (RFC 2295)',
  '507 Insufficient Storage (WebDAV; RFC 4918)',
  '508 Loop Detected (WebDAV; RFC 5842)',
  '510 Not Extended (RFC 2774)',
  '511 Network Authentication Required (RFC 6585)',
  '419 Page Expired (Laravel Framework)',
  '420 Method Failure (Spring Framework)',
  '420 Enhance Your Calm (Twitter)',
  '430 Request Header Fields Too Large (Shopify)',
  '450 Blocked by Windows Parental Controls (Microsoft)',
  '498 Invalid Token (Esri)',
  '499 Token Required (Esri)',
  '509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)',
  '529 Site is overloaded',
  '530 Site is frozen',
  '598 (Informal convention) Network read timeout error',
  '599 Network Connect Timeout Error',
  '440 Login Time-out',
  '449 Retry With',
  '451 Redirect',
  '444 No Response',
  '494 Request header too large',
  '495 SSL Certificate Error',
  '496 SSL Certificate Required',
  '497 HTTP Request Sent to HTTPS Port',
  '499 Client Closed Request',
  '520 Web Server Returned an Unknown Error',
  '521 Web Server Is Down',
  '522 Connection Timed Out',
  '523 Origin Is Unreachable',
  '524 A Timeout Occurred',
  '525 SSL Handshake Failed',
  '526 Invalid SSL Certificate',
  '527 Railgun Error',
  '530 Site is frozen',
  '460 Client closed the connection with the load balancer before the idle timeout period elapsed.',
  '463 The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.',
  '561 Unauthorized',
  '110 Response is Stale',
  '111 Revalidation Failed',
  '112 Disconnected Operation',
  '113 Heuristic Expiration',
  '199 Miscellaneous Warning',
  '214 Transformation Applied',
  '299 Miscellaneous Persistent Warning',
];

// const statusList = rawStatus.map((status) => {
//   const [code, ...message] = status.split(' ');
//   return { code, description: message.join(' ') };
// });

const httpStatusCodes = [
  {
    code: '100',
    description: 'Continue',
  },
  {
    code: '101',
    description: 'Switching Protocols',
  },
  {
    code: '102',
    description: 'Processing (WebDAV; RFC 2518)',
  },
  {
    code: '103',
    description: 'Early Hints (RFC 8297)',
  },
  {
    code: '200',
    description: 'OK',
  },
  {
    code: '201',
    description: 'Created',
  },
  {
    code: '202',
    description: 'Accepted',
  },
  {
    code: '203',
    description: 'Non-Authoritative Information (since HTTP/1.1)',
  },
  {
    code: '204',
    description: 'No Content',
  },
  {
    code: '205',
    description: 'Reset Content',
  },
  {
    code: '206',
    description: 'Partial Content (RFC 7233)',
  },
  {
    code: '207',
    description: 'Multi-Status (WebDAV; RFC 4918)',
  },
  {
    code: '208',
    description: 'Already Reported (WebDAV; RFC 5842)',
  },
  {
    code: '226',
    description: 'IM Used (RFC 3229)',
  },
  {
    code: '300',
    description: 'Multiple Choices',
  },
  {
    code: '301',
    description: 'Moved Permanently',
  },
  {
    code: '302',
    description: 'Found (Previously "Moved temporarily")',
  },
  {
    code: '303',
    description: 'See Other (since HTTP/1.1)',
  },
  {
    code: '304',
    description: 'Not Modified (RFC 7232)',
  },
  {
    code: '305',
    description: 'Use Proxy (since HTTP/1.1)',
  },
  {
    code: '306',
    description: 'Switch Proxy',
  },
  {
    code: '307',
    description: 'Temporary Redirect (since HTTP/1.1)',
  },
  {
    code: '308',
    description: 'Permanent Redirect (RFC 7538)',
  },
  {
    code: '400',
    description: 'Bad Request',
  },
  {
    code: '401',
    description: 'Unauthorized (RFC 7235)',
  },
  {
    code: '402',
    description: 'Payment Required',
  },
  {
    code: '403',
    description: 'Forbidden',
  },
  {
    code: '404',
    description: 'Not Found',
  },
  {
    code: '405',
    description: 'Method Not Allowed',
  },
  {
    code: '406',
    description: 'Not Acceptable',
  },
  {
    code: '407',
    description: 'Proxy Authentication Required (RFC 7235)',
  },
  {
    code: '408',
    description: 'Request Timeout',
  },
  {
    code: '409',
    description: 'Conflict',
  },
  {
    code: '410',
    description: 'Gone',
  },
  {
    code: '411',
    description: 'Length Required',
  },
  {
    code: '412',
    description: 'Precondition Failed (RFC 7232)',
  },
  {
    code: '413',
    description: 'Payload Too Large (RFC 7231)',
  },
  {
    code: '414',
    description: 'URI Too Long (RFC 7231)',
  },
  {
    code: '415',
    description: 'Unsupported Media Type (RFC 7231)',
  },
  {
    code: '416',
    description: 'Range Not Satisfiable (RFC 7233)',
  },
  {
    code: '417',
    description: 'Expectation Failed',
  },
  {
    code: '418',
    description: "I'm a teapot (RFC 2324, RFC 7168)",
  },
  {
    code: '421',
    description: 'Misdirected Request (RFC 7540)',
  },
  {
    code: '422',
    description: 'Unprocessable Entity (WebDAV; RFC 4918)',
  },
  {
    code: '423',
    description: 'Locked (WebDAV; RFC 4918)',
  },
  {
    code: '424',
    description: 'Failed Dependency (WebDAV; RFC 4918)',
  },
  {
    code: '425',
    description: 'Too Early (RFC 8470)',
  },
  {
    code: '426',
    description: 'Upgrade Required',
  },
  {
    code: '428',
    description: 'Precondition Required (RFC 6585)',
  },
  {
    code: '429',
    description: 'Too Many Requests (RFC 6585)',
  },
  {
    code: '431',
    description: 'Request Header Fields Too Large (RFC 6585)',
  },
  {
    code: '451',
    description: 'Unavailable For Legal Reasons (RFC 7725)',
  },
  {
    code: '500',
    description: 'Internal Server Error',
  },
  {
    code: '501',
    description: 'Not Implemented',
  },
  {
    code: '502',
    description: 'Bad Gateway',
  },
  {
    code: '503',
    description: 'Service Unavailable',
  },
  {
    code: '504',
    description: 'Gateway Timeout',
  },
  {
    code: '505',
    description: 'HTTP Version Not Supported',
  },
  {
    code: '506',
    description: 'Variant Also Negotiates (RFC 2295)',
  },
  {
    code: '507',
    description: 'Insufficient Storage (WebDAV; RFC 4918)',
  },
  {
    code: '508',
    description: 'Loop Detected (WebDAV; RFC 5842)',
  },
  {
    code: '510',
    description: 'Not Extended (RFC 2774)',
  },
  {
    code: '511',
    description: 'Network Authentication Required (RFC 6585)',
  },
  {
    code: '419',
    description: 'Page Expired (Laravel Framework)',
  },
  {
    code: '420',
    description: 'Method Failure (Spring Framework)',
  },
  {
    code: '420',
    description: 'Enhance Your Calm (Twitter)',
  },
  {
    code: '430',
    description: 'Request Header Fields Too Large (Shopify)',
  },
  {
    code: '450',
    description: 'Blocked by Windows Parental Controls (Microsoft)',
  },
  {
    code: '498',
    description: 'Invalid Token (Esri)',
  },
  {
    code: '499',
    description: 'Token Required (Esri)',
  },
  {
    code: '509',
    description: 'Bandwidth Limit Exceeded (Apache Web Server/cPanel)',
  },
  {
    code: '529',
    description: 'Site is overloaded',
  },
  {
    code: '530',
    description: 'Site is frozen',
  },
  {
    code: '598',
    description: '(Informal convention) Network read timeout error',
  },
  {
    code: '599',
    description: 'Network Connect Timeout Error',
  },
  {
    code: '440',
    description: 'Login Time-out',
  },
  {
    code: '449',
    description: 'Retry With',
  },
  {
    code: '451',
    description: 'Redirect',
  },
  {
    code: '444',
    description: 'No Response',
  },
  {
    code: '494',
    description: 'Request header too large',
  },
  {
    code: '495',
    description: 'SSL Certificate Error',
  },
  {
    code: '496',
    description: 'SSL Certificate Required',
  },
  {
    code: '497',
    description: 'HTTP Request Sent to HTTPS Port',
  },
  {
    code: '499',
    description: 'Client Closed Request',
  },
  {
    code: '520',
    description: 'Web Server Returned an Unknown Error',
  },
  {
    code: '521',
    description: 'Web Server Is Down',
  },
  {
    code: '522',
    description: 'Connection Timed Out',
  },
  {
    code: '523',
    description: 'Origin Is Unreachable',
  },
  {
    code: '524',
    description: 'A Timeout Occurred',
  },
  {
    code: '525',
    description: 'SSL Handshake Failed',
  },
  {
    code: '526',
    description: 'Invalid SSL Certificate',
  },
  {
    code: '527',
    description: 'Railgun Error',
  },
  {
    code: '530',
    description: 'Site is frozen',
  },
  {
    code: '460',
    description:
      'Client closed the connection with the load balancer before the idle timeout period elapsed.',
  },
  {
    code: '463',
    description:
      'The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.',
  },
  {
    code: '561',
    description: 'Unauthorized',
  },
  {
    code: '110',
    description: 'Response is Stale',
  },
  {
    code: '111',
    description: 'Revalidation Failed',
  },
  {
    code: '112',
    description: 'Disconnected Operation',
  },
  {
    code: '113',
    description: 'Heuristic Expiration',
  },
  {
    code: '199',
    description: 'Miscellaneous Warning',
  },
  {
    code: '214',
    description: 'Transformation Applied',
  },
  {
    code: '299',
    description: 'Miscellaneous Persistent Warning',
  },
];

export { httpStatusCodes };
