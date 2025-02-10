import { Schema, Document } from 'mongoose';

export const BrandSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    priority: { type: Number, default: 0 },
    productType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'brands' },
);

export interface Brand extends Document {
  name: string;
  imageUrl: string;
  priority: number;
  productType: string;
  createdAt: Date;
}
