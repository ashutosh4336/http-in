import { NextResponse } from 'next/server';

export async function GET(request) {
  const startTime = Date.now();

  try {
    // Simulate some processing time (optional)
    await new Promise((resolve) => setTimeout(resolve, 100));

    const endTime = Date.now();
    const timeTaken = endTime - startTime;

    return NextResponse.json({
      message: 'PONG',
      timestamp: new Date().toISOString(),
      timeTaken: `${timeTaken}ms`,
      status: 'success',
    });
  } catch (error) {
    const endTime = Date.now();
    const timeTaken = endTime - startTime;

    return NextResponse.json(
      {
        message: 'Error',
        timestamp: new Date().toISOString(),
        timeTaken: `${timeTaken}ms`,
        status: 'error',
        error: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
