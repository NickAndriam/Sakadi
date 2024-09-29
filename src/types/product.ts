export interface ProductInterface {
  uid?: string;
  name?: string;
  size?: string;
  color?: Array<[]>;
  price?: number;
  number?: number;
  stock?: number;
  image?: string;
  category?: string;
  type?: string;
}

export interface CartInterface {
  uid?: string;
  name?: string;
  size?: string;
  color?: Array<[]>;
  price?: number;
  number?: number;
  stock?: number;
  image?: string;
  category?: string;
  type?: string;
  count: number;
}
