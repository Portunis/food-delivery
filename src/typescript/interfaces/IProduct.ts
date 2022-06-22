export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  type: number;
  size: number;
  quantity: number;
  diameter?: number | null;
  thickness?: string;
}
