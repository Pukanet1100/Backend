import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from './brand.schema';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private brandModel: Model<Brand>) {}

  async getAllBrands(): Promise<Brand[]> {
    const data = await this.brandModel.find().exec();
    return data;
  }
}
