import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [PosComponent, ProductsComponent, CategoriesComponent],
  imports: [CommonModule, MaterialModule, PosRoutingModule],
})
export class PosModule {}
