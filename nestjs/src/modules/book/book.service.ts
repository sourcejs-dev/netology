import { Injectable } from '@nestjs/common';
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
      fileBook: '12321',
      fileName: 'asdsad',
    },
  ];

  findAll(): IBook[] {
    return this.books;
  }

  findById(id: string): IBook {
    return this.books.filter((book) => book.id === id).pop();
  }

  create() {
    return 'create';
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
