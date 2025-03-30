import { NextResponse } from 'next/server';

// GET handler
export async function GET(request) {
  try {
    // Your data fetching logic here
    const statusCodes = [
      {
        code: 200,
        title: 'OK',
        description: 'The request has succeeded.',
        category: 'success',
      },
      {
        code: 404,
        title: 'Not Found',
        description: 'The requested resource could not be found.',
        category: 'client',
      },
      // Add more status codes as needed
    ];

    return NextResponse.json(statusCodes);
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
