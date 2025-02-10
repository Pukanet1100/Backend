import { Schema, Document } from 'mongoose';

const DetailSchema = new Schema({
  colorCode: { type: String, default: null },
  colorName: { type: String, required: true },
  priceInclVat: { type: Number, required: true },
  matCode: { type: [String], required: true },
  images: [{ imageUrl: String }],
});

export const HandsetSchema = new Schema(
  {
    company: { type: String, required: true },
    productType: { type: String, required: true },
    productSubType: { type: String, required: true },
    brand: { type: String, required: true },
    priorityBand: { type: String, default: '' },
    commercialName: { type: String, required: true },
    searchName: { type: String, required: true },
    thumbnail: { type: String, default: null },
    subGroupModel: { type: String },
    modelName: { type: String, required: true },
    detail: { type: [DetailSchema], required: true },
    effectiveDate: { type: Date, required: true },
    isSyncSuccess: { type: Boolean, default: false },
    unitName: { type: String, default: 'SET' },
    freegoods: { type: String, default: null },
  },
  { collection: 'handset', timestamps: true },
);

export interface Detail {
  colorCode?: string;
  colorName: string;
  priceInclVat: number;
  matCode: string[];
  images?: { imageUrl: string }[];
}

export interface Handset extends Document {
  company: string;
  productType: string;
  productSubType: string;
  brand: string;
  priorityBand?: string;
  commercialName: string;
  searchName: string;
  thumbnail?: string | null;
  subGroupModel?: string;
  modelName: string;
  detail: Detail[];
  effectiveDate: Date;
  isSyncSuccess: boolean;
  unitName: string;
  freegoods?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
