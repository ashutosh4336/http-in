import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/app/utils/timing';
import httpStatusCodes from '@/data/statusCodes';

// GET handler
export async function GET(request) {
  try {
    const timing = getTimingInfo();
    await new Promise((resolve) => setTimeout(resolve, 100));
    // Your data fetching logic here

    return NextResponse.json({
      status: 'success',
      message: 'Status codes fetched successfully',
      ...timing.getMetrics(),
      data: httpStatusCodes.map((code) => ({
        code: code.code,
        title: code.title,
        description: code.description,
        category: code.category,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request) {
  try {
    const body = await request.json();

    // Your data processing logic here
    // For example, saving to a database

    return NextResponse.json(
      { message: 'Status code created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(request) {
  try {
    const body = await request.json();

    // Your update logic here

    return NextResponse.json(
      { message: 'Status code updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(request) {
  try {
    // Your delete logic here

    return NextResponse.json(
      { message: 'Status code deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
