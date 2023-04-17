export interface IItemDetail {
  id: number;
  name: string;
  description?: String;
  available: number;
  packaging: number;
  origin: string;
  price: string;
  order?: number;
  length: string[];
  color: string;
  images: string;
}