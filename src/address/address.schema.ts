import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address extends Document {
  @Prop({ required: true })
  houseNumber: string;

  @Prop()
  villageNumber?: string;

  @Prop()
  villageName?: string;

  @Prop()
  buildingName?: string;

  @Prop()
  floor?: string;

  @Prop()
  alley?: string;

  @Prop()
  road?: string;

  @Prop({ required: true })
  province: string;

  @Prop({ required: true })
  district: string;

  @Prop({ required: true })
  subDistrict: string;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
