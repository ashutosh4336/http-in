import { NextResponse } from 'next/server';

// GET handler for individual status code
export async function GET(request, { params }) {
  try {
    const { code } = params;

    // Your data fetching logic here
    // Example response
    const statusCode = {
      code: parseInt(code),
      title: 'OK',
      description: 'The request has succeeded.',
      category: 'success',
    };

    return NextResponse.json(statusCode);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// PUT handler for updating individual status code
export async function PUT(request, { params }) {
  try {
    const { code } = params;
    const body = await request.json();

    // Your update logic here

    return NextResponse.json(
      { message: `Status code ${code} updated successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// DELETE handler for removing individual status code
export async function DELETE(request, { params }) {
  try {
    const { code } = params;

    // Your delete logic here

    return NextResponse.json(
      { message: `Status code ${code} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
