import { Injectable } from '@angular/core';
import { ProductService } from '../../../pos/products/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError, of } from 'rxjs';
import * as ProductActions from './products.actions';
import { AppState } from '../../app/app.reducers';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly productsService: ProductService
  ) {}

  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ProductActions.getProducts
        // ProductActions.deleteProduct,
        // ProductActions.createProduct,
        // ProductActions.updateProduct
      ),
      switchMap(() => {
        return this.productsService.getProducts().pipe(
          map((_) =>
            ProductActions.getProductsCompleteAction({
              products: _,
            })
          ),
          catchError((err) => {
            let error = 'Failed to get notes';
            if (err?.error?.message) {
              error = err?.error?.message;
            } else if (err?.message) {
              error = err?.message;
            }
            // this.alert.error(error);
            return of(
              ProductActions.getProductsFailedAction({
                errorMessage: err.error.message,
              })
            );
          })
        );
      })
    );
  });
}
