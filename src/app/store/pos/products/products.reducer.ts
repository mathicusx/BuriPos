import { createFeature, createReducer, on } from '@ngrx/store';
import {
  CreateProduct,
  Product,
  UpdateProduct,
} from '../../../pos/products/products';
import * as ProductActions from './products.actions';

export interface ProductsState {
  products: Product[];
  product: Product | null;
  createProduct: CreateProduct | null;
  updateProduct: UpdateProduct | null;
  loadingProducts: boolean;
  loadingProduct: boolean;
}

export const initialProductsState: ProductsState = {
  products: [],
  product: null,
  createProduct: null,
  updateProduct: null,
  loadingProduct: false,
  loadingProducts: false,
};

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductActions.getProducts, (state) => ({
    ...state,
    products: initialProductsState.products,
    loadingProducts: true,
  })),
  on(ProductActions.getProductsCompleteAction, (state, { products }) => ({
    ...state,
    products: products,
    loadingProducts: false,
  })),
  on(ProductActions.getProductsFailedAction, (state) => ({
    ...state,
    loadingProducts: false,
  }))
);

export const productsFeature = createFeature({
  name: 'products',
  reducer: productsReducer,
});
