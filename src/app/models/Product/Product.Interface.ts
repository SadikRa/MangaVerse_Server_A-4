export type TMangaGenres =
  | 'Shonen'
  | 'Shojo'
  | 'Seinen'
  | 'Slice of life'
  | 'Sports manga'
  | 'Josei'
  | 'Isekai'
  | 'Mecha'
  | 'Fantasy'
  | 'Sci-Fi'
  | 'Horror'
  | 'Psychological'
  | 'Mystery'
  | 'Thriller'
  | 'Romance'
  | 'Supernatural'
  | 'Historical'
  | 'Adventure'
  | 'Comedy'
  | 'Drama';

export type Product = {
  id?: string;
  title: string;
  author: string;
  price: number;
  category: TMangaGenres;
  description: string;
  quantity: number;
  inStock: boolean;
};
