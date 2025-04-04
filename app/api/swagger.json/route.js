import { generateSwagger } from '@/app/utils/generateSwagger';

export async function GET(request) {
  const swaggerSpec = await generateSwagger(request);
  console.log('swagger.json route called');
  return new Response(JSON.stringify(swaggerSpec), {
    headers: { 'Content-Type': 'application/json' },
  });
}
