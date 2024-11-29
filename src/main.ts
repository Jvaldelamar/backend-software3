import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS con configuraciones específicas
  app.enableCors({
    origin: 'http://localhost:8080', // Cambia a la URL de tu frontend en producción si es necesario
    credentials: true,
  });

  // Sirve la carpeta 'uploads' como estática
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // Inicia la aplicación en el puerto 3000
  await app.listen(3000);
  console.log(`Servidor corriendo en: http://localhost:3000`);
}
bootstrap();
