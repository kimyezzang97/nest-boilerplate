import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  findOne(number: number): Promise<Board> {
    return this.boardsRepository.findOne({
      where: {
        number,
      },
    });
  }

  async save(Board: Board): Promise<void> {
    await this.boardsRepository.save(Board);
  }

  async remove(number: number): Promise<void> {
    await this.boardsRepository.delete(number);
  }
}
