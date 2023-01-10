import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './api/board/board.module';
import { Board } from './api/board/entities/board.entity';
@Module({
  imports: [
    BoardModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '222.117.117.110',
      port: 3307,
      username: 'kyc',
      password: 'kyc1234',
      database: 'board',
      entities: [Board],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
