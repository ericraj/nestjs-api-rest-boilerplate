import { Injectable } from '@nestjs/common';
import { Hello } from './types/hello';

@Injectable()
export class AppService {
  getHello(): Hello {
    return { message: 'Hello World!' };
  }
}
