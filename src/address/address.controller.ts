import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from '../schema/address.schema';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAllAddresses(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async getAddressById(@Param('id') id: string): Promise<Address> {
    return this.addressService.findById(id);
  }

  @Post()
  async createAddress(@Body() addressData: Partial<Address>): Promise<Address> {
    return this.addressService.create(addressData);
  }
}
