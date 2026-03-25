// apps/nexa-agro-web/src/types/product.ts
export type ProductCategory =
  | 'Semillas'
  | 'Fertilizantes'
  | 'Riego'
  | 'Herramientas'
  | 'Protección';

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  image: string;
  description: string;
  featured?: boolean;
};
