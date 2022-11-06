import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

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
  create() {
    return 'create';
  }

  @Put('/:id')
  updateById(@Param('id') id: string) {
    return this.bookService.updateById({ id });
  }

  @Delete('/:id')
  destroyById(@Param('id') id: string) {
    return this.bookService.destroyById(id);
  }
}
