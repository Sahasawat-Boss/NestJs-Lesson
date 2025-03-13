import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NestJS Server is Running, Lesson 4';
  }
}

//>>> http://localhost:3000/