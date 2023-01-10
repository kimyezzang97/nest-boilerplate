import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { BoardDto } from './model/board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @HttpCode(200)
  @Get('/hello')
  getHello(): string {
    return this.boardService.getHello();
  }

  // list 조회
  @HttpCode(200)
  @Get('/')
  getBoardList(): Promise<Board[]> {
    // res.status('200').send;
    return this.boardService.findAll();
  }

  // 단건 조회
  @HttpCode(200)
  @Get('/:number')
  getBoard(@Param('number') number: number): Promise<Board> {
    // res.status('200').send;
    return this.boardService.findOne(number);
  }

  // update
  @HttpCode(201)
  @Patch('/')
  update(@Body() boardParam: BoardDto): Promise<void> {
    // console.log(boardParam);
    return this.boardService.update(boardParam);
  }

  // delete
  @HttpCode(200)
  @Delete('/:number')
  delete(@Param('number') number: number): Promise<void> {
    // console.log(boardParam);
    return this.boardService.delete(number);
  }

  // create
  @HttpCode(201)
  @Post('/')
  create(@Body() boardParam: BoardDto): Promise<void> {
    return this.boardService.save(boardParam);
  }
}
