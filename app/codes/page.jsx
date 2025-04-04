import Codes from '@/layouts/Codes';
import httpStatusCodes from '@/data/statusCodes';
import { getCategoryAndColor } from '@/utils/util';

export const metadata = {
  title: 'HTTP Status Codes || TheHTTP',
  description:
    'Explore the complete list of HTTP status codes and their meanings',
};

// Process the status codes to include category and color
const processedStatusCodes = httpStatusCodes.map((code) => ({
  ...code,
  title: code.title.trim(),
  description: code.description.split('(')[0].trim(),
  ...getCategoryAndColor(code.code),
}));

export default function CodesPage() {
  return <Codes processedStatusCodes={processedStatusCodes} />;
}
