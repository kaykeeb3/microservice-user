import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

export const globalModules = [PrismaModule, ConfigModule.forRoot()];
