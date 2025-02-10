import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModule } from './brand/brand.module';
import { HandsetModule } from './handset/handset.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kstterorgtion:pass123@cluster0.npbto.mongodb.net/Brand_model',
    ),
    BrandModule,
    HandsetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
