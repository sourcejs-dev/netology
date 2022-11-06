import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO, UpdateBookDTO } from './dtos/book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.bookService.findById(id);
  }

  @Post()
  create(@Body() data: CreateBookDTO) {
    return this.bookService.create(data);
  }

  @Put('/:id')
  updateById(@Param('id') id: string, @Body() data: UpdateBookDTO) {
    return this.bookService.updateById({ ...data, id });
  }

  @Delete('/:id')
  destroyById(@Param('id') id: string) {
    return this.bookService.destroyById(id);
  }
}
