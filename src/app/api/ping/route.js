import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/utils/timing';

export async function GET() {
  const timing = getTimingInfo();

  // Get start time of request
  const startTime = process.hrtime();

  // Get current timestamp
  const timestamp = new Date().toISOString();

  // Get system uptime in seconds
  const uptime = process.uptime();

  // Calculate time taken in milliseconds
  const hrtime = process.hrtime(startTime);
  const timeTaken = (hrtime[0] * 1000 + hrtime[1] / 1000000).toFixed(2);

  return NextResponse.json({
    status: 'success',
    message: 'pong',
    timestamp,
    timeTaken: `${timeTaken}ms`,
    uptime: `${uptime}s`,
    ...timing.getMetrics(),
  });
}
