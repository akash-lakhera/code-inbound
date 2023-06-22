import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiService } from './api.service';
import { ApiController } from './api.controllers';
import { Task } from './api.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [ApiController],
  providers: [ApiService],
 
})
export class ApiModule {}