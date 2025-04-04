import {
  FaCode,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaTools,
} from 'react-icons/fa';

const resources = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'HTTP Status Codes',
    description:
      'Comprehensive guide to HTTP status codes with detailed explanations and examples.',
    link: '/codes',
  },
  {
    id: 2,
    icon: <FaNetworkWired />,
    title: 'DNS Guide',
    description:
      'Learn about Domain Name System, DNS records, and how the internet resolves domain names.',
    link: '/dns',
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: 'HTTPS & Security',
    description:
      'Understanding SSL/TLS, certificates, and secure web communication.',
    link: '/security',
  },
  {
    id: 4,
    icon: <FaCloud />,
    title: 'Cloud Computing',
    description:
      'Explore cloud services, deployment strategies, and cloud architecture patterns.',
    link: '/cloud',
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: 'Web APIs',
    description:
      'Learn about REST APIs, GraphQL, and modern API design principles.',
    link: '/apis',
  },
  {
    id: 6,
    icon: <FaTools />,
    title: 'Developer Tools',
    description: 'Collection of useful tools for web development and testing.',
    link: '/tools',
  },
];

export default resources;
