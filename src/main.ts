import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { addSwagger } from './app/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const PORT = configService.get<number>(`PORT`);

  addSwagger(app);

  await app.listen(PORT, () =>
    console.warn(`server running in localhost: ${PORT}`),
  );
}
bootstrap();
