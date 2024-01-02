import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create({ name, email }: { name: string; email: string }): string {
    return `Olá, ${name}`;
  }
}
