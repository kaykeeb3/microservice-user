import { Module } from '@nestjs/common';
import { featureModules } from './modules';
import { globalModules } from './modules/global';

@Module({
  imports: [...globalModules, ...featureModules],
  controllers: [],
})
export class AppModule {}
