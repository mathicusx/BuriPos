// src/app/products.ts

export interface Product {
  barcode: string;
  price: number;
  name: string;
  description: string;
}

export interface SaleButtonOptions {
  name: string | number,

}

export const saleButtonOptions: SaleButtonOptions[] = [
  {
    name: 1,
  },
  {
    name: 2,
  },
  {
    name: 3,
  },
  {
    name: 4,
  },
  {
    name: 5,
  },
  {
    name: 6,
  },
  {
    name: 7,
  },
  {
    name: 8,
  },
  {
    name: 9,
  },
  {
    name: 0,
  },
  {
    name: '00',
  },
];

export const products: Product[] = [
  {
    barcode: '1234567890123',
    price: 29.99,
    name: 'Product 1',
    description: 'Description for Product 1',
  },
  {
    barcode: '2345678901234',
    price: 49.99,
    name: 'Product 2',
    description: 'Description for Product 2',
  },
  {
    barcode: '3456789012345',
    price: 19.99,
    name: 'Product 3',
    description: 'Description for Product 3',
  },
  {
    barcode: '4567890123456',
    price: 99.99,
    name: 'Product 4',
    description: 'Description for Product 4',
  },
];

// src/app/grocery-categories.ts

// src/app/grocery-category.ts

export interface GroceryCategory {
  id: number;
  name: string;
  description?: string; // Optional description
}

export const groceryCategories: GroceryCategory[] = [
  {
    id: 1,
    name: 'Плодове',
    description: 'Fresh fruits including apples, bananas, berries, and more.',
  },
  {
    id: 2,
    name: 'Зеленчуци',
    description:
      'Fresh vegetables including leafy greens, root vegetables, and more.',
  },
  {
    id: 3,
    name: 'Мляко',
    description: 'Milk, cheese, yogurt, and other dairy products.',
  },
  {
    id: 4,
    name: 'Хляб',
    description: 'Bread, pastries, and other baked goods.',
  },
  {
    id: 5,
    name: 'Месо',
    description: 'Fresh meat including beef, chicken, pork, and more.',
  },
  {
    id: 7,
    name: 'Напитки',
    description: 'Soft drinks, juices, water, and other beverages.',
  },
  {
    id: 8,
    name: 'Шоколад',
    description: 'Chips, cookies, candy, and other snack items.',
  },
  {
    id: 9,
    name: 'Пръчки',
    description: 'Frozen meals, vegetables, desserts, and more.',
  },
  {
    id: 10,
    name: 'Макарони',
    description: 'Staples such as pasta, rice, canned goods, and spices.',
  },
  {
    id: 11,
    name: 'Семки',
    description: 'Personal care items, vitamins, and supplements.',
  },
  {
    id: 12,
    name: 'Фъстъци',
    description:
      'Cleaning supplies, paper goods, and other household essentials.',
  },
  {
    id: 13,
    name: 'Чипс',
    description: 'Food, toys, and other supplies for pets.',
  },
];
