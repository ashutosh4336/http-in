import { NextResponse } from 'next/server';
import { getTimingInfo } from '@/app/utils/timing';
import users from '@/data/users';

// GET handler
export async function GET(request) {
  const timing = getTimingInfo();
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    console.log({ page, limit });
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    console.log({ startIndex, endIndex });

    const paginatedUsers = users.slice(startIndex, endIndex);
    console.log({
      paginatedUsersLength: paginatedUsers.length,
    });
    const totalPages = Math.ceil(users.length / limit);

    const response = {
      status: 'success',
      message: 'Users fetched successfully',
      ...timing.getMetrics(),
      data: {
        users: paginatedUsers,
        totalPages,
        currentPage: page,
        totalUsers: users.length,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
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

// DELETE handler
export async function DELETE(request) {
  const timing = getTimingInfo();
  try {
    return NextResponse.json(
      {
        success: true,
        message: 'Status code deleted successfully',
        data: { users: [] },
        ...timing.getMetrics(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
