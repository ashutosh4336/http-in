import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getTimingInfo } from '@/app/utils/timing';
import users from '@/data/users';

// GET handler
export async function GET(request, { params }) {
  const timing = getTimingInfo();
  try {
    const { id } = params;
    const user = users.find((user) => user.id === id);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: `User not found`,
          ...timing.getMetrics(),
        },
        { status: 404 }
      );
    }

    const response = {
      status: 'success',
      message: 'Users fetched successfully',
      ...timing.getMetrics(),
      data: { user },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
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

// POST handler
export async function POST(request) {
  const timing = getTimingInfo();
  try {
    const body = await request.json();

    const newUser = {
      id: uuidv4(),
      ...body,
    };

    return NextResponse.json(
      {
        message: 'User added successfully.',
        ...timing.getMetrics(),
        user: newUser,
      },
      { status: 201 }
    );
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

// PUT handler
export async function PUT(request, { params }) {
  const timing = getTimingInfo();
  try {
    const { id } = params;
    const body = await request.json();

    const user = users.find((user) => user.id === id);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: `User not found`,
          ...timing.getMetrics(),
        },
        { status: 404 }
      );
    }

    const updatedUser = {
      ...user,
      ...body,
    };

    return NextResponse.json(
      {
        message: 'User updated successfully.',
        ...timing.getMetrics(),
        user: updatedUser,
      },
      { status: 200 }
    );
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

// DELETE handler
export async function DELETE(request, { params }) {
  const timing = getTimingInfo();
  try {
    const { id } = params;
    const user = users.find((user) => user.id === id);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: `User not found`,
          ...timing.getMetrics(),
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User deleted successfully.',
        ...timing.getMetrics(),
      },
      { status: 200 }
    );
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
