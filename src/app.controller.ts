import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Hello } from './types/hello';

@Controller()
@ApiTags('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  @ApiOkResponse({ type: Hello })
  getHello(): Hello {
    return this.appService.getHello();
  }
}
