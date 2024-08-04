import { Component } from '@angular/core';
import { Product, products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = products;

  constructor() {
    console.log(this.products);
  }
}
