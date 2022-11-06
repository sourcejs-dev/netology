import { Injectable } from '@nestjs/common';
import { CreateBookDTO } from './dtos/book.dto';
import { IBook, IBookUpdate } from './interfaces/book.interface';

@Injectable()
export class BookService {
  private books: IBook[] = [
    {
      id: '1',
      title: 'title',
      description: 'sda',
      authors: '12321',
      favorite: false,
    },
  ];

  findAll(): IBook[] {
    return this.books;
  }

  findById(id: string): IBook {
    return this.books.filter((book) => book.id === id).pop();
  }

  create(payload: CreateBookDTO): IBook {
    const id = String(Date.now());
    this.books.push({ ...payload, id });

    return { ...payload, id };
  }

  updateById(payload: IBookUpdate): IBook {
    const index = this.books.findIndex((book) => book.id === payload.id);
    const el = this.books[index];
    this.books[index] = { ...el, ...payload };

    return this.books[index];
  }

  destroyById(id: string): boolean {
    const arr = this.books.filter((book) => book.id !== id);
    this.books = arr;

    return true;
  }
}
