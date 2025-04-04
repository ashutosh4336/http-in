import { generateSwagger } from '@/app/utils/generateSwagger';
import swaggerSpec from '@/lib/swagger';

export async function GET(request) {
  if (process.env.NODE_ENV === 'development') {
    await generateSwagger(request);
  }

  console.log('swagger.json route called');

  return new Response(JSON.stringify(swaggerSpec), {
    headers: { 'Content-Type': 'application/json' },
  });
}
