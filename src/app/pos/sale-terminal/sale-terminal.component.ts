import { Component } from '@angular/core';
import {
  groceryCategories,
  GroceryCategory,
  Product,
  products,
} from '../products/products';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sale-terminal',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sale-terminal.component.html',
  styleUrl: './sale-terminal.component.scss',
})
export class SaleTerminalComponent {
  products: Product[] = products;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];
  numbers: number[] = [];
  categories: GroceryCategory[] = groceryCategories;

  filterForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });
  constructor() {
    console.log(this.products);
    this.numbers = Array.from({ length: 9 }, (_, i) => i + 1);
  }
}
