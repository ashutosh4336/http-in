import { useRouter } from 'next/router';
import { httpStatusCodes } from '../../../src/data/statusCodes';

const RawStatusCodePage = () => {
  const router = useRouter();
  const { code } = router.query;

  // Find the status code in our data
  const statusCode = httpStatusCodes.find((sc) => sc.code.toString() === code);

  if (!statusCode) {
    return (
      <pre style={{ padding: '2rem', fontFamily: 'monospace' }}>
        {JSON.stringify(
          {
            error: 'Not Found',
            message: `No status code found with number ${code}`,
          },
          null,
          4
        )}
      </pre>
    );
  }

  return (
    <pre style={{ padding: '2rem', fontFamily: 'monospace' }}>
      {JSON.stringify(statusCode, null, 2)}
    </pre>
  );
};

export default RawStatusCodePage;
