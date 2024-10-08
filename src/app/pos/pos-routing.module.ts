import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PosComponent } from './pos.component';
import { SalesManagmentComponent } from './sales-managment/sales-managment.component';

const routes: Routes = [
  {
    path: '',
    component: PosComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'managment',
        component: SalesManagmentComponent,
      },
    ],
  },
  // { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
