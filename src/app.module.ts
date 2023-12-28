import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController,AppController],
  providers: [AppService],
})
export class AppModule {}
