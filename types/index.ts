export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inventory: number;
  slug: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  products: Product[];
  slug: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityProduct extends Omit<Product, 'images'> {
  images: SanityImage[];
}

export interface LocaleParams {
  locale: string;
}