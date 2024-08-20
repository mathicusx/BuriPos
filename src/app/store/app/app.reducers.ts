import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { productsReducer, ProductsState } from '../pos/products';
import { environment } from '../../../environments/environment.development';

export interface AppState {
  products: ProductsState;
  router: RouterReducerState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  products: productsReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
