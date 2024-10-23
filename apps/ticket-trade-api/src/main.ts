import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
    forbidNonWhitelisted: true, 
    transform: true, 
  }));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Swagger configuratie
  const config = new DocumentBuilder()
    .setTitle('Ticket Trade API')
    .setDescription('API voor het beheren van tickets, gebruikers, concerten, etc.')
    .setBasePath(`/${globalPrefix}`)  // Hier geven we aan dat de base path '/api' moet zijn
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); 

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📚 Swagger docs available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();