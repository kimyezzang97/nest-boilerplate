import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.reppository';
import { Board } from './entities/board.entity';
import { BoardDto } from './model/board.dto';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  getHello(): string {
    return 'board';
  }

  findAll(): Promise<Board[]> {
    const boardList = this.boardRepository.findAll();

    return boardList;
  }

  findOne(number: number): Promise<Board> {
    return this.boardRepository.findOne(number);
  }

  async update(boardParam: BoardDto): Promise<void> {
    const boardNum: number = boardParam.number;
    let board = await this.boardRepository.findOne(boardParam.number);
    if (!board) {
      throw new NotFoundException(
        `board not found number : ${boardParam.number}`,
      );
    }
    board.title = boardParam.title;
    board.contents = boardParam.contents;
    board.writer = boardParam.writer;

    return this.boardRepository.save(board);
  }

  delete(number: number): Promise<void> {
    return this.boardRepository.remove(number);
  }

  save(boardParam: BoardDto) {
    boardParam.number = null;
    return this.boardRepository.save(boardParam);
  }
}
