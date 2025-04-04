// const httpStatusCodes = [
//   // 1xx Informational
//   {
//     code: 100,
//     title: 'Continue',
//     description:
//       'The server has received the request headers and the client should proceed to send the request body.',
//     category: 'Informational',
//     color: '#2196F3',
//     details:
//       'This status code indicates that the initial part of the request has been received and has not yet been rejected by the server.',
//   },
//   {
//     code: 101,
//     title: 'Switching Protocols',
//     description:
//       'The server is switching protocols as requested by the client.',
//     category: 'Informational',
//     color: '#2196F3',
//     details:
//       'This status code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.',
//   },
//   {
//     code: 102,
//     title: 'Processing',
//     description:
//       'The server has received and is processing the request, but no response is available yet.',
//     category: 'Informational',
//     color: '#2196F3',
//     details:
//       'This status code indicates that the server has accepted the full request but has not yet completed it.',
//   },
//   {
//     code: 103,
//     title: 'Early Hints',
//     description:
//       'Used to return some response headers before final HTTP message.',
//     category: 'Informational',
//     color: '#2196F3',
//     details:
//       'This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.',
//   },

//   // 2xx Success
//   {
//     code: 200,
//     title: 'OK',
//     description: 'The request has succeeded.',
//     category: 'Success',
//     color: '#4CAF50',
//     details:
//       'The standard response for successful HTTP requests. The actual response will depend on the request method used.',
//   },
//   {
//     code: 201,
//     title: 'Created',
//     description:
//       'The request has succeeded and a new resource has been created as a result.',
//     category: 'Success',
//     color: '#4CAF50',
//     details:
//       'This is typically the response sent after POST requests, or some PUT requests.',
//   },
//   {
//     code: 202,
//     title: 'Accepted',
//     description:
//       'The request has been accepted for processing, but the processing has not been completed.',
//     category: 'Success',
//     color: '#4CAF50',
//     details:
//       'The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.',
//   },
//   {
//     code: 204,
//     title: 'No Content',
//     description:
//       'There is no content to send for this request, but the headers may be useful.',
//     category: 'Success',
//     color: '#4CAF50',
//     details:
//       'The user agent may update its cached headers for this resource with the new ones.',
//   },

//   // 3xx Redirection
//   {
//     code: 300,
//     title: 'Multiple Choices',
//     description: 'The request has more than one possible response.',
//     category: 'Redirection',
//     color: '#FFC107',
//     details:
//       'The user agent or user should choose one of them. There is no standardized way of choosing one of the responses.',
//   },
//   {
//     code: 301,
//     title: 'Moved Permanently',
//     description:
//       'The URL of the requested resource has been changed permanently.',
//     category: 'Redirection',
//     color: '#FFC107',
//     details: 'The new URL is given in the response.',
//   },
//   {
//     code: 302,
//     title: 'Found',
//     description:
//       'This response code means that the URI of requested resource has been changed temporarily.',
//     category: 'Redirection',
//     color: '#FFC107',
//     details:
//       'Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.',
//   },

//   // 4xx Client Errors
//   {
//     code: 400,
//     title: 'Bad Request',
//     description:
//       'The server could not understand the request due to invalid syntax.',
//     category: 'Client Error',
//     color: '#F44336',
//     details: 'The client should not repeat this request without modification.',
//   },
//   {
//     code: 401,
//     title: 'Unauthorized',
//     description:
//       'The client must authenticate itself to get the requested response.',
//     category: 'Client Error',
//     color: '#F44336',
//     details:
//       'This is similar to 403, but in this case, authentication is possible.',
//   },
//   {
//     code: 403,
//     title: 'Forbidden',
//     description: 'The client does not have access rights to the content.',
//     category: 'Client Error',
//     color: '#F44336',
//     details: "Unlike 401, the server knows the client's identity.",
//   },
//   {
//     code: 404,
//     title: 'Not Found',
//     description: 'The server can not find the requested resource.',
//     category: 'Client Error',
//     color: '#F44336',
//     details:
//       'This means the server cannot find the requested resource. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.',
//   },

//   // 5xx Server Errors
//   {
//     code: 500,
//     title: 'Internal Server Error',
//     description:
//       'The server has encountered a situation it does not know how to handle.',
//     category: 'Server Error',
//     color: '#FF9800',
//     details:
//       'This is a generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
//   },
//   {
//     code: 501,
//     title: 'Not Implemented',
//     description:
//       'The request method is not supported by the server and cannot be handled.',
//     category: 'Server Error',
//     color: '#FF9800',
//     details:
//       'The server either does not recognize the request method, or it lacks the ability to fulfil the request.',
//   },
//   {
//     code: 502,
//     title: 'Bad Gateway',
//     description:
//       'The server, while acting as a gateway or proxy, received an invalid response from an upstream server.',
//     category: 'Server Error',
//     color: '#FF9800',
//     details:
//       'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
//   },
//   {
//     code: 503,
//     title: 'Service Unavailable',
//     description: 'The server is not ready to handle the request.',
//     category: 'Server Error',
//     color: '#FF9800',
//     details:
//       'Common causes are a server that is down for maintenance or that is overloaded.',
//   },

//   // Custom Status Codes
//   {
//     code: 418,
//     title: "I'm a Teapot",
//     description: 'The server refuses the attempt to brew coffee with a teapot.',
//     category: 'Custom',
//     color: '#9E9E9E',
//     details:
//       "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol.",
//   },
//   {
//     code: 429,
//     title: 'Too Many Requests',
//     description:
//       'The user has sent too many requests in a given amount of time.',
//     category: 'Client Error',
//     color: '#F44336',
//     details: 'This response is used when limiting the rate of requests.',
//   },
//   {
//     code: 451,
//     title: 'Unavailable For Legal Reasons',
//     description:
//       'The user requested a resource that is not available due to legal reasons.',
//     category: 'Client Error',
//     color: '#F44336',
//     details:
//       'This status code indicates that the server is denying access to the resource as a consequence of a legal demand.',
//   },
// ];

const httpStatusCodes = Object.freeze([
  {
    code: 100,
    title: 'Continue',
    description:
      'The server has received the request headers, and the client should proceed to send the request body.',
    category: 'Informational',
    color: '#2196F3',
    details:
      'The server is ready to receive the request body. Often used in a two-step request process.',
  },
  {
    code: 101,
    title: 'Switching Protocols',
    description: 'The requester has asked the server to switch protocols.',
    category: 'Informational',
    color: '#2196F3',
    details:
      'The server is switching to the protocol that was requested by the client.',
  },
  {
    code: 102,
    title: 'Processing',
    description:
      'The server has received and is processing the request, but no response is available yet.',
    category: 'Informational',
    color: '#2196F3',
    details:
      'Primarily used with WebDAV, indicating that the request is being processed.',
  },
  {
    code: 103,
    title: 'Early Hints',
    description:
      'Used to return some response headers before final HTTP message.',
    category: 'Informational',
    color: '#2196F3',
    details:
      'Helps improve performance by sending preliminary headers before the full response.',
  },
  {
    code: 200,
    title: 'OK',
    description: 'The request has succeeded.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Standard response for successful HTTP requests.',
  },
  {
    code: 201,
    title: 'Created',
    description:
      'The request has been fulfilled and resulted in a new resource being created.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Commonly used after POST requests for resource creation.',
  },
  {
    code: 202,
    title: 'Accepted',
    description:
      'The request has been accepted for processing, but the processing has not been completed.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Used when the action will be processed asynchronously.',
  },
  {
    code: 203,
    title: 'Non-Authoritative Information',
    description:
      'The server is a transforming proxy and received non-authoritative response.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Information returned may be modified from the origin server.',
  },
  {
    code: 204,
    title: 'No Content',
    description:
      'The server successfully processed the request and is not returning any content.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Typically used when a response body is not required.',
  },
  {
    code: 205,
    title: 'Reset Content',
    description:
      'The server successfully processed the request, and is asking the client to reset the document view.',
    category: 'Success',
    color: '#4CAF50',
    details:
      'Tells the client to reset the view of the document (e.g., form reset).',
  },
  {
    code: 206,
    title: 'Partial Content',
    description:
      'The server is delivering only part of the resource due to a range header sent by the client.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Used for partial downloads, like video streaming.',
  },
  {
    code: 207,
    title: 'Multi-Status',
    description: 'The message body contains multiple status codes.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Used in WebDAV responses with multiple resources.',
  },
  {
    code: 208,
    title: 'Already Reported',
    description: 'The members of a DAV binding have already been enumerated.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Prevents repeated enumeration of internal members.',
  },
  {
    code: 226,
    title: 'IM Used',
    description:
      'The server has fulfilled a GET request for the resource with instance manipulations applied.',
    category: 'Success',
    color: '#4CAF50',
    details: 'Delta encoding of resources.',
  },
  {
    code: 300,
    title: 'Multiple Choices',
    description: 'The request has more than one possible response.',
    category: 'Redirection',
    color: '#FFC107',
    details:
      'The user agent or user should choose one of them. There is no standardized way of choosing one of the responses.',
  },
  {
    code: 301,
    title: 'Moved Permanently',
    description:
      'The URL of the requested resource has been changed permanently.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'The new URL is given in the response.',
  },
  {
    code: 302,
    title: 'Found',
    description: 'The URI of requested resource has been changed temporarily.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Used for temporary redirection.',
  },
  {
    code: 303,
    title: 'See Other',
    description:
      'The response to the request can be found under another URI using a GET method.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Often used for redirecting after form submission.',
  },
  {
    code: 304,
    title: 'Not Modified',
    description: 'The resource has not been modified since the last request.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Used for caching purposes.',
  },
  {
    code: 305,
    title: 'Use Proxy',
    description: 'The requested resource is only available through a proxy.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Deprecated due to security concerns.',
  },
  {
    code: 306,
    title: 'Switch Proxy',
    description: 'No longer used.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Reserved for future use.',
  },
  {
    code: 307,
    title: 'Temporary Redirect',
    description:
      'The request should be repeated with another URI; future requests should still use the original URI.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Preserves request method.',
  },
  {
    code: 308,
    title: 'Permanent Redirect',
    description: 'The resource is now permanently located at another URI.',
    category: 'Redirection',
    color: '#FFC107',
    details: 'Preserves method and body during redirection.',
  },
  {
    code: 400,
    title: 'Bad Request',
    description:
      'The server could not understand the request due to invalid syntax.',
    category: 'Client Error',
    color: '#F44336',
    details: 'The client should not repeat the request without modifications.',
  },
  {
    code: 401,
    title: 'Unauthorized',
    description:
      'The client must authenticate itself to get the requested response.',
    category: 'Client Error',
    color: '#F44336',
    details:
      'Authentication is required and has failed or has not yet been provided.',
  },
  {
    code: 402,
    title: 'Payment Required',
    description: 'This response code is reserved for future use.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Originally intended for digital payment systems.',
  },
  {
    code: 403,
    title: 'Forbidden',
    description: 'The client does not have access rights to the content.',
    category: 'Client Error',
    color: '#F44336',
    details: "Authentication won't help here.",
  },
  {
    code: 404,
    title: 'Not Found',
    description: 'The server can not find the requested resource.',
    category: 'Client Error',
    color: '#F44336',
    details: 'The resource may have been deleted or never existed.',
  },
  {
    code: 405,
    title: 'Method Not Allowed',
    description:
      'The request method is known by the server but is not supported by the target resource.',
    category: 'Client Error',
    color: '#F44336',
    details: 'The method is not allowed for the requested URL.',
  },
  {
    code: 406,
    title: 'Not Acceptable',
    description:
      'The requested resource is capable of generating only content not acceptable according to the Accept headers.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Occurs during content negotiation.',
  },
  {
    code: 407,
    title: 'Proxy Authentication Required',
    description: 'The client must first authenticate itself with the proxy.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Similar to 401, but for proxy authentication.',
  },
  {
    code: 408,
    title: 'Request Timeout',
    description: 'The server timed out waiting for the request.',
    category: 'Client Error',
    color: '#F44336',
    details:
      'Client did not produce a request within the time that the server was prepared to wait.',
  },
  {
    code: 409,
    title: 'Conflict',
    description:
      'The request could not be processed because of conflict in the request.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Usually occurs with resource state conflicts.',
  },
  {
    code: 410,
    title: 'Gone',
    description:
      'The resource requested is no longer available and will not be available again.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used when a resource has been intentionally removed.',
  },
  {
    code: 411,
    title: 'Length Required',
    description:
      'The request did not specify the length of its content, which is required by the resource.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Content-Length header is required.',
  },
  {
    code: 412,
    title: 'Precondition Failed',
    description:
      'The server does not meet one of the preconditions that the requester put on the request.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used for conditional requests.',
  },
  {
    code: 413,
    title: 'Payload Too Large',
    description:
      'The request is larger than the server is willing or able to process.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Usually due to a large file upload.',
  },
  {
    code: 414,
    title: 'URI Too Long',
    description: 'The URI provided was too long for the server to process.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Often due to excessively long query strings.',
  },
  {
    code: 415,
    title: 'Unsupported Media Type',
    description:
      'The request entity has a media type which the server or resource does not support.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used when the server refuses to accept the request payload.',
  },
  {
    code: 416,
    title: 'Range Not Satisfiable',
    description:
      "The range specified by the Range header field in the request can't be fulfilled.",
    category: 'Client Error',
    color: '#F44336',
    details: 'Requested range not available.',
  },
  {
    code: 417,
    title: 'Expectation Failed',
    description:
      'The server cannot meet the requirements of the Expect request-header field.',
    category: 'Client Error',
    color: '#F44336',
    details: 'The expectation given in the request could not be met.',
  },
  {
    code: 418,
    title: "I'm a teapot",
    description: 'The server refuses the attempt to brew coffee with a teapot.',
    category: 'Client Error',
    color: '#F44336',
    details: "Defined in RFC 2324, an April Fools' joke.",
  },
  {
    code: 422,
    title: 'Unprocessable Entity',
    description:
      'The request was well-formed but was unable to be followed due to semantic errors.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Common in WebDAV and REST APIs.',
  },
  {
    code: 425,
    title: 'Too Early',
    description:
      'Indicates that the server is unwilling to risk processing a request that might be replayed.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used with early data in TLS 1.3.',
  },
  {
    code: 426,
    title: 'Upgrade Required',
    description: 'The client should switch to a different protocol.',
    category: 'Client Error',
    color: '#F44336',
    details:
      'The server refuses to perform the request using the current protocol.',
  },
  {
    code: 428,
    title: 'Precondition Required',
    description: 'The origin server requires the request to be conditional.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used to prevent lost updates.',
  },
  {
    code: 429,
    title: 'Too Many Requests',
    description:
      'The user has sent too many requests in a given amount of time.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Rate limiting error.',
  },
  {
    code: 431,
    title: 'Request Header Fields Too Large',
    description:
      'The server is unwilling to process the request because its header fields are too large.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Request headers too large.',
  },
  {
    code: 451,
    title: 'Unavailable For Legal Reasons',
    description:
      'The user requests an illegal resource, such as a web page censored by a government.',
    category: 'Client Error',
    color: '#F44336',
    details: 'Used when access is denied for legal reasons.',
  },
  {
    code: 500,
    title: 'Internal Server Error',
    description:
      "The server has encountered a situation it doesn't know how to handle.",
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Generic server error.',
  },
  {
    code: 501,
    title: 'Not Implemented',
    description:
      'The request method is not supported by the server and cannot be handled.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'The server does not recognize the request method.',
  },
  {
    code: 502,
    title: 'Bad Gateway',
    description:
      'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Usually indicates network errors.',
  },
  {
    code: 503,
    title: 'Service Unavailable',
    description: 'The server is not ready to handle the request.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Often due to maintenance or server overload.',
  },
  {
    code: 504,
    title: 'Gateway Timeout',
    description:
      'The server is acting as a gateway and cannot get a response in time.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Timeout from upstream server.',
  },
  {
    code: 505,
    title: 'HTTP Version Not Supported',
    description:
      'The HTTP version used in the request is not supported by the server.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Server does not support the HTTP protocol version.',
  },
  {
    code: 506,
    title: 'Variant Also Negotiates',
    description:
      'Transparent content negotiation for the request results in a circular reference.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Server configuration error.',
  },
  {
    code: 507,
    title: 'Insufficient Storage',
    description:
      'The server is unable to store the representation needed to complete the request.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Used in WebDAV.',
  },
  {
    code: 508,
    title: 'Loop Detected',
    description:
      'The server detected an infinite loop while processing a request.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Typically with WebDAV.',
  },
  {
    code: 510,
    title: 'Not Extended',
    description:
      'Further extensions to the request are required for the server to fulfill it.',
    category: 'Server Error',
    color: '#9C27B0',
    details:
      'The policy for accessing the resource requires further extensions.',
  },
  {
    code: 511,
    title: 'Network Authentication Required',
    description: 'The client needs to authenticate to gain network access.',
    category: 'Server Error',
    color: '#9C27B0',
    details: 'Commonly used for captive portals.',
  },
]);

export default httpStatusCodes;
