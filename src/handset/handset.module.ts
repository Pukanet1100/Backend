import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HandsetSchema } from './handset.schema';
import { HandsetService } from './handset.service';
import { HandsetController } from './handset.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'handset', schema: HandsetSchema }]),
  ],
  controllers: [HandsetController],
  providers: [HandsetService],
})
export class HandsetModule {}
