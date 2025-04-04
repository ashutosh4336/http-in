import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/app/utils/timing';
import httpStatusCodes from '@/data/statusCodes';

// GET handler for individual status code
export async function GET(request, { params }) {
  try {
    const timing = getTimingInfo();
    const { code } = params;

    const codeDetails = httpStatusCodes.find((c) => c.code === parseInt(code));

    if (!codeDetails) {
      return NextResponse.json(
        {
          success: false,
          error: 'Status code not found',
          ...timing.getMetrics(),
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Status code details fetched successfully',
      ...timing.getMetrics(),
      data: codeDetails,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
        ...timing.getMetrics(),
      },
      { status: 500 }
    );
  }
}
