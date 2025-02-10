import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Handset } from '../schema/handset.schema';

@Injectable()
export class HandsetService {
  constructor(@InjectModel('handset') private handsetModel: Model<Handset>) {}

  async getAllHanset(): Promise<Handset[]> {
    return this.handsetModel.find().exec();
  }
}
