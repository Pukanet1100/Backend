import { Controller, Get } from '@nestjs/common';
import { HandsetService } from './handset.service';

@Controller()
export class HandsetController {
  constructor(private readonly handsetService: HandsetService) {}

  @Get('Handset')
  getBrands() {
    return this.handsetService.getAllHanset();
  }
}
