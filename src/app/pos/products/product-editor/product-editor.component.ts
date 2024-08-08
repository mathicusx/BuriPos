import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CATEGORIES } from '../../../constants/categoriesOptions';
import { Product } from '../products';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.scss',
})
export class ProductEditorComponent implements OnInit {
  productForm: FormGroup;
  categories = CATEGORIES;

  constructor(
    public dialogRef: MatDialogRef<ProductEditorComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { product?: Product; isEditing: boolean }
  ) {}

  ngOnInit(): void {
    this.initForm(this.data.product);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  editOrAddProduct() {
    const product = this.productForm.value;
    this.dialogRef.close(product);
    console.log(this.productForm);
  }

  private initForm(product?: Product) {
    console.log(product);
    this.productForm = new FormGroup({
      id: new FormControl(product?.id || null), // For editing purposes
      name: new FormControl(product?.name || null),
      price: new FormControl(product?.price || null),
      barcode: new FormControl(product?.barcode || null),
      quantity: new FormControl(product?.quantity || 1),
      category: new FormControl(product?.category || null),
    });
  }
}
