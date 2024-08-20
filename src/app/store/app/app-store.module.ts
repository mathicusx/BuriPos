import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './app.reducers';
import { ProductsStoreModule } from '../pos/products';
import { CommonModule } from '@angular/common';
import {
  NavigationActionTiming,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: false,
        strictActionWithinNgZone: true,
      },
    }),
    ProductsStoreModule,
  ],
  exports: [StoreModule],
})
export class AppStoreModule {}
