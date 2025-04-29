export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: {};
  images: string[];
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}