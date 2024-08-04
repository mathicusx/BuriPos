// src/app/product.service.ts

import { Injectable } from '@angular/core'; 
import { Product, products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = products;

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(barcode: string): void {
    this.products = this.products.filter(
      (product) => product.barcode !== barcode
    );
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product.barcode === updatedProduct.barcode
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
