import { Product } from '../products/products';
import * as categories from '../../constants/categoriesOptions';

export const productsSoldToday: Product[] = [
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
    id: 12312,
    category: categories.CATEGORY_FRUITS,
    barcode: '234267',
    price: 0.99,
    costOfGoods: 0.72,
    name: 'Банан',
    description: 'Red apple',
  },
  {
    id: 512521,
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
];
export const productsSoldThisMonth: Product[] = [
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
    id: 12312,
    category: categories.CATEGORY_FRUITS,
    barcode: '234267',
    price: 0.99,
    costOfGoods: 0.72,
    name: 'Банан',
    description: 'Red apple',
  },
  {
    id: 512521,
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
    id: 12312,
    category: categories.CATEGORY_FRUITS,
    barcode: '234267',
    price: 0.99,
    costOfGoods: 0.72,
    name: 'Банан',
    description: 'Red apple',
  },
  {
    id: 512521,
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
];
