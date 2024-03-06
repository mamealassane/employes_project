import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmployeModule } from './employe/employe.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/project'),
    UserModule,
    EmployeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
