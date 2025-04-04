import React from 'react';
import httpStatusCodes from '@/data/statusCodes';
import SingleCodeContent from '@/components/Codes/SingleCodeContent';

export async function generateMetadata({ params }) {
  const code = params.code;
  const statusCode = httpStatusCodes.find((c) => c.code.toString() === code);

  if (!statusCode) {
    return {
      title: 'Status Code Not Found',
    };
  }

  return {
    title: `HTTP ${statusCode.code} - ${statusCode.title}`,
    description: statusCode.description,
  };
}

export default function StatusCodePage({ params }) {
  const { code } = params;
  const statusCode = httpStatusCodes.find((c) => c.code.toString() === code);

  return <SingleCodeContent statusCode={statusCode} code={code} />;
}
