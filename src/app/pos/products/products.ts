import * as categories from '../../constants/categoriesOptions';
export interface Product {
  id: number;
  category: string;
  barcode: string;
  price: number;
  costOfGoods: number;
  name: string;
  description: string;
  quantity?: number;
}

export interface CreateProduct {
  name: string;
  category: string;
  price: number;
  quantity: number;
  costOfGoods: number;
  barcode: string; 
}

export interface UpdateProduct {
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
  costOfGoods?: number;
  barcode?: string; 
}
export interface ProductForSale {
  barcode: string;
  price: number;
  quantity: number;
  name: string;
}

export interface SaleButtonOptions {
  name: string | number;
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
    id: 1,
    category: categories.CATEGORY_VEGETABLES,
    barcode: '123456',
    costOfGoods: 1.56,
    price: 1.99,
    name: 'Carrot',
    description: 'Fresh carrot',
  },
  {
    id: 2,
    category: categories.CATEGORY_FRUITS,
    barcode: '2345671',
    price: 0.99,
    costOfGoods: 0.72,
    name: 'Ябълка',
    description: 'Red apple',
  },
  {
    id: 2,
    category: categories.CATEGORY_FRUITS,
    barcode: '234267',
    price: 0.99,
    costOfGoods: 0.72,
    name: 'Банан',
    description: 'Red apple',
  },
  {
    id: 2,
    category: categories.CATEGORY_FRUITS,
    barcode: '294567',
    costOfGoods: 0.72,
    price: 0.99,
    name: 'Круша',
    description: 'Red apple',
  },
  {
    id: 3,
    category: categories.CATEGORY_DAIRY,
    barcode: '345678',
    costOfGoods: 1.72,
    price: 2.99,
    name: 'Milk',
    description: 'Whole milk',
  },
  {
    id: 4,
    category: categories.CATEGORY_BAKERY,
    barcode: '456789',
    costOfGoods: 2.72,
    price: 3.99,
    name: 'Bread',
    description: 'Whole grain bread',
  },
  {
    id: 5,
    category: categories.CATEGORY_MEAT,
    barcode: '567890',
    costOfGoods: 4.72,

    price: 5.99,
    name: 'Chicken Breast',
    description: 'Boneless chicken breast',
  },
  {
    id: 6,
    category: categories.CATEGORY_SEAFOOD,
    barcode: '678901',
    costOfGoods: 11.72,

    price: 12.99,
    name: 'Salmon',
    description: 'Fresh salmon fillet',
  },
  {
    id: 7,
    category: categories.CATEGORY_BEVERAGES,
    barcode: '789012',
    price: 1.49,
    costOfGoods: 0.72,

    name: 'Orange Juice',
    description: 'Fresh orange juice',
  },
  {
    id: 8,
    category: categories.CATEGORY_SNACKS,
    barcode: '890123',
    price: 2.49,
    costOfGoods: 1.72,

    name: 'Chips',
    description: 'Potato chips',
  },
  {
    id: 9,
    category: categories.CATEGORY_FROZEN,
    barcode: '901234',
    price: 4.99,
    costOfGoods: 3.72,
    name: 'Ice Cream',
    description: 'Vanilla ice cream',
  },
  {
    id: 10,
    category: categories.CATEGORY_PANTRY,
    barcode: '012345',
    price: 3.49,
    costOfGoods: 2.72,

    name: 'Pasta',
    description: 'Spaghetti pasta',
  },
  {
    id: 11,
    category: categories.CATEGORY_HEALTH,
    barcode: '123789',
    price: 7.99,
    costOfGoods: 6.72,

    name: 'Vitamins',
    description: 'Multivitamins',
  },
  {
    id: 12,
    category: categories.CATEGORY_CLEANING,
    barcode: '234890',
    price: 2.99,
    costOfGoods: 2.72,
    name: 'Dish Soap',
    description: 'Lemon scented dish soap',
  },
  {
    id: 13,
    category: categories.CATEGORY_CLEANING,
    barcode: '59067207',
    price: 7.10,
    costOfGoods: 6.80,
    name: 'Цигари',
    description: 'Lemon scented dish soap',
  },
];


export interface GroceryCategory {
  category: string;
  id: number;
  name: string;
  description?: string; // Optional description
}

export const groceryCategories: GroceryCategory[] = [
  {
    id: 1,
    name: 'Плодове',
    description: 'Fresh fruits including apples, bananas, berries, and more.',
    category: categories.CATEGORY_FRUITS,
  },
  {
    id: 2,
    name: 'Зеленчуци',
    description:
      'Fresh vegetables including leafy greens, root vegetables, and more.',
    category: categories.CATEGORY_VEGETABLES,
  },
  {
    id: 3,
    name: 'Мляко',
    description: 'Milk, cheese, yogurt, and other dairy products.',
    category: categories.CATEGORY_DAIRY,
  },
  {
    id: 4,
    name: 'Хляб',
    description: 'Bread, pastries, and other baked goods.',
    category: categories.CATEGORY_BAKERY,
  },
  {
    id: 5,
    name: 'Месо',
    description: 'Fresh meat including beef, chicken, pork, and more.',
    category: categories.CATEGORY_MEAT,
  },
  {
    id: 7,
    name: 'Напитки',
    description: 'Soft drinks, juices, water, and other beverages.',
    category: categories.CATEGORY_BEVERAGES,
  },
  {
    id: 8,
    name: 'Шоколад',
    description: 'Chips, cookies, candy, and other snack items.',
    category: categories.CATEGORY_SNACKS,
  },
  {
    id: 9,
    name: 'Пръчки',
    description: 'Frozen meals, vegetables, desserts, and more.',
    category: categories.CATEGORY_SNACKS,
  },
  {
    id: 10,
    name: 'Макарони',
    description: 'Staples such as pasta, rice, canned goods, and spices.',
    category: categories.CATEGORY_PANTRY,
  },
  {
    id: 11,
    name: 'Семки',
    description: 'Personal care items, vitamins, and supplements.',
    category: categories.CATEGORY_PANTRY,
  },
  {
    id: 12,
    name: 'Фъстъци',
    description:
      'Cleaning supplies, paper goods, and other household essentials.',
    category: categories.CATEGORY_PANTRY,
  },
  {
    id: 13,
    name: 'Чипс',
    description: 'Food, toys, and other supplies for pets.',
    category: categories.CATEGORY_PANTRY,
  },
];
