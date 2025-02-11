import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address, AddressDocument } from '../schema/address.schema';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  async findAll(): Promise<Address[]> {
    return this.addressModel.find().exec();
  }

  async findById(id: string): Promise<Address> {
    const address = await this.addressModel.findById(id).exec();
    if (!address) {
      throw new NotFoundException('Address not found');
    }
    return address;
  }

  async create(addressData: Partial<Address>): Promise<Address> {
    const newAddress = new this.addressModel(addressData);
    return newAddress.save();
  }
}
