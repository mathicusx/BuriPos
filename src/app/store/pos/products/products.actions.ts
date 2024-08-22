import { createAction, props } from '@ngrx/store';
import { CreateProduct, Product, UpdateProduct } from '../../../pos/products/products';

const PRODUCTS = 'PRODUCTS';

export const getProducts = createAction(`[Page ${PRODUCTS}] get products`);

export const getProductsCompleteAction = createAction(
  `[Service ${PRODUCTS}] get products complete`,
  props<{ products: Product[] }>()
);

export const getProductsFailedAction = createAction(
  `[Service ${PRODUCTS}] get products failed`,
  props<{ errorMessage: string }>()
);

export const createProduct = createAction(
    `[Page ${PRODUCTS}] create Product`,
    props<{ product: CreateProduct }>()
  );
  
  export const createProductCompleteAction = createAction(
    `[Service ${PRODUCTS}] create Product complete`,
    props<{ product: CreateProduct }>()
  );
  
  export const createProductFailedAction = createAction(
    `[Service ${PRODUCTS}] create Product failed`,
    props<{ errorMessage: string }>()
  );
  
  export const updateProduct = createAction(
    `[Page ${PRODUCTS}] update Product`,
    props<{ product: UpdateProduct }>()
  );
  export const updateProductCompleteAction = createAction(
    `[Service ${PRODUCTS}] update Product complete`,
    props<{ product: UpdateProduct }>()
  );
  
  export const updateProductFailedAction = createAction(
    `[Service ${PRODUCTS}] update Product failed`,
    props<{ errorMessage: string }>()
  );
  
  export const deleteProduct = createAction(
    `[Page ${PRODUCTS}] delete Product`,
    props<{ product_id: number }>()
  );
  export const deleteProductCompleteAction = createAction(
    `[Service ${PRODUCTS}] delete Product complete`
  );
  export const deleteProductFailedAction = createAction(
    `[Service ${PRODUCTS}] delete Product failed`,
    props<{ errorMessage: string }>()
  );
