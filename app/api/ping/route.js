import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/app/utils/timing';

export async function GET() {
  const timing = getTimingInfo(true);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    status: 'success',
    message: 'pong',
    ...timing.getMetrics(),
  });
}
