export class CreateBookDTO {
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
}

export class UpdateBookDTO {
  title?: string;
  description?: string;
  authors?: string;
  favorite?: boolean;
}
