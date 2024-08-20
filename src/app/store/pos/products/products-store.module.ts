import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsFeature } from './products.reducer';
import { ProductsEffects } from './products.effects';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productsFeature),
    // EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsStoreModule {}
