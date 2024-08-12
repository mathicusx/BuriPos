// src/app/product.service.ts

import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = products;

  constructor(private readonly _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.apiServer}/Product`);
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
