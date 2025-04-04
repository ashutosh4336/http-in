import { unlink } from 'fs/promises';
import path from 'path';
import { getTimingInfo } from '@/app/utils/timing';
import { generateSwagger } from '@/app/utils/generateSwagger';

export async function GET(request) {
  const timing = getTimingInfo();
  try {
    const { searchParams } = new URL(request.url);
    const force = parseInt(searchParams.get('force')) || 0;

    if (force === 1) {
      await unlink(path.join(process.cwd(), '/public/swagger/swagger.json'));
      console.log('swagger.json file deleted');
    }

    await generateSwagger(request);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/swagger/index.html', // redirect target
      },
    });
  } catch (err) {
    console.error(err?.message);
    return new Response(
      JSON.stringify({ error: err?.message, ...timing.getMetrics() }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
