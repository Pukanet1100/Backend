import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop({ required: true })
  houseNumber: string;

  @Prop()
  villageNumber?: string;

  @Prop()
  village?: string;

  @Prop()
  building?: string;

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

  @Prop()
  email?: string;

  @Prop()
  tel?: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
