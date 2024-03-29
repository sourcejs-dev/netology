export interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
}

export interface IBookUpdate {
  id: string;
  title?: string;
  description?: string;
  authors?: string;
  favorite?: boolean;
}
