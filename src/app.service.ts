import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }
}

//>>> http://localhost:3000/