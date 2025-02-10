import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './address.schema';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<Address>,
  ) {}

  async create(addressData: Partial<Address>): Promise<Address> {
    const address = new this.addressModel(addressData);
    return address.save();
  }

  async findAll(): Promise<Address[]> {
    return this.addressModel.find().lean().exec();
  }
}
