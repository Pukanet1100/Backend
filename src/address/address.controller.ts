import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.schema';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() addressData: Partial<Address>): Address {
    return this.addressService.create(addressData);
  }

  @Get()
  findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }
}
