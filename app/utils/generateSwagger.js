import { readFile, writeFile, access } from 'fs/promises';
import path from 'path';
import { constants } from 'fs';
import swaggerSpec from '@/lib/swagger';

export const generateSwagger = async (request) => {
  let swaggerJsonExist = false;
  const url = new URL(request.url);
  const swaggerJSON = url.origin + '/swagger/swagger.json';

  try {
    await access(
      path.join(process.cwd(), '/public/swagger/swagger.json'),
      constants.F_OK
    );
    swaggerJsonExist = true;
    console.log('swagger.json exists');
  } catch (err) {
    console.error('swagger.json file not found');
  }

  if (!swaggerJsonExist) {
    await writeFile(
      path.join(process.cwd(), '/public/swagger/swagger.json'),
      JSON.stringify(swaggerSpec)
    );
    console.log('swagger.json created');
  }

  let swaggerInitializer = null;
  try {
    swaggerInitializer = await readFile(
      path.join(process.cwd(), '/public/swagger/swagger-initializer.js'),
      'utf-8'
    );
    console.log('swagger-initializer.js exists');
  } catch (err) {
    console.error('swagger-initializer.js file not found');
  }

  if (swaggerInitializer) {
    const updatedSwaggerInitializer = swaggerInitializer.replace(
      'https://petstore.swagger.io/v2/swagger.json',
      swaggerJSON
    );

    await writeFile(
      path.join(process.cwd(), '/public/swagger/swagger-initializer.js'),
      updatedSwaggerInitializer
    );
    console.log('swagger-initializer.js updated');
  }

  return swaggerSpec;
};
