import { Component, HostListener } from '@angular/core';
import {
  groceryCategories,
  GroceryCategory,
  Product,
  products,
  saleButtonOptions,
  SaleButtonOptions,
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
    MatButtonModule,
  ],
  templateUrl: './sale-terminal.component.html',
  styleUrl: './sale-terminal.component.scss',
})
export class SaleTerminalComponent {
  products: Product[] = products;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];
  numbers: number[] = [];
  categories: GroceryCategory[] = groceryCategories;
  saleButtonOptions: SaleButtonOptions[] = saleButtonOptions;

  filterForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });

  private lastKeyPressTime: number = 0;
  private keypressThreshold: number = 50;
  private barcodeData: string = '';
  private timeDiffArray: number[] = [];
  private captureFirstKey: string = '';
  private capturedFirstKey: boolean = false;

  constructor() {}

  handleBarcodeInput(event: KeyboardEvent): void {
    const currentTime = new Date().getTime();

    // Calculate time difference between keypresses
    const timeDiff = currentTime - this.lastKeyPressTime;

    // Update last keypress time
    this.lastKeyPressTime = currentTime;

    if (timeDiff > 300 && !this.capturedFirstKey) {
      this.captureFirstKey = event.key;
      this.capturedFirstKey = true;
    }
    this.timeDiffArray.push(timeDiff);
    if (timeDiff < this.keypressThreshold) {
      // Treat as scanner input
      this.barcodeData += event.key;
      console.log('barcode scanner');
      // Assuming scanner sends data followed by Enter key
      if (event.key === 'Enter') {
        // Process the barcode data
        const cleanedData = this.barcodeData.replace(/Enter$/, '');
        this.processBarcode(cleanedData);
        this.barcodeData = ''; // Reset after processing
        this.captureFirstKey = '';
        this.capturedFirstKey = false
        this.timeDiffArray = [];
      }
    } else {
      // Treat as keyboard input (e.g., for typing)
      // Optionally handle keyboard input differently
      // this.barcodeData = '';
      console.log('Keyboard typing detected');
    }
  }

  processBarcode(data: string): void {
    console.log('Scanned Barcode:', this.captureFirstKey + data);
    console.log(this.timeDiffArray);
    // Add any additional processing logic here
  }
}
