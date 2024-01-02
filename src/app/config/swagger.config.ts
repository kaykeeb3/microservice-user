import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const addSwagger = (app: INestApplication) => {
  const configService = app.get<ConfigService>(ConfigService);

  const appName = configService.get<string>('API_NAME');
  const apiServer = configService.get<string>('API_SERVER');
  const appDescription = configService.get<string>('API_DESCRIPTION');
  const appTags = configService.get<string>('API_TAGS');

  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appDescription)
    .addServer(apiServer ?? '')
    .setVersion('1.0')
    .addTag(appTags);

  const configBuilded = config.build();

  const document = SwaggerModule.createDocument(app, configBuilded);

  SwaggerModule.setup('docs', app, document);
};
