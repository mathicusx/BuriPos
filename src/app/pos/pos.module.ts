import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PosComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductEditorComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PosModule {}
