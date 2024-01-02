import { Module } from '@nestjs/common';
import { featureModules } from './modules';

@Module({
  imports: [...featureModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
