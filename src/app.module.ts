import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './api/api.entity';

import { ApiModule } from './api/api.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ligmaballz',
      database: 'hello',
      entities: [Task],
      synchronize: true,
    }),
   ApiModule
  ],
})
export class AppModule {}
