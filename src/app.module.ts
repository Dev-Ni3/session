import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { OrderModule } from './order/order.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [OrderModule, InvoicesModule],
  controllers: [UserController,AppController, ProductController],
  providers: [AppService,UserService, ProductService],
})
export class AppModule {}
