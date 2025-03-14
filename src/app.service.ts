import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NestJS Server is Running...';
  }
}

//>>> http://localhost:3000/