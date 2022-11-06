export interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileBook: string;
  fileName: string;
}

export interface IBookUpdate {
  id: string;
  title?: string;
  description?: string;
  authors?: string;
  favorite?: boolean;
  fileBook?: string;
  fileName?: string;
}
