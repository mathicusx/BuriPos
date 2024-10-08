import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, products } from './products';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { FormGroup, FormControl } from '@angular/forms';
import { combineLatest, map, Observable, Subject, take, takeUntil } from 'rxjs';
import { ProductService } from './products.service';
import { Store } from '@ngrx/store';
import {
  getProducts,
  selectLoadingProducts,
  selectProducts,
} from '../../store/pos/products';
import { AppState } from '../../store/app/app.reducers';

interface ViewModel {
  products: Product[];
  loading: boolean;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  public readonly vm$: Observable<ViewModel>;

  products: Product[] = products;

  filteredProducts: Product[] = [];

  filterForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });

  onDestroy = new Subject<boolean>();

  private readonly loading$: Observable<boolean>;

  private readonly products$: Observable<Product[]>;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private readonly store: Store<AppState>
  ) {
    this.store.dispatch(getProducts());
    this.loading$ = this.store.select(selectLoadingProducts);
    this.products$ = this.store.select(selectProducts);
    this.vm$ = combineLatest([this.products$, this.loading$]).pipe(
      map(([products, loading]) => ({ products, loading }))
    );
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((res) => console.log(res));
    this.filteredProducts = products;
    this.filterForm.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => this.searchProduct());
  }

  openProductEditor(product?: Product): void {
    const dialogRef = this.dialog.open(ProductEditorComponent, {
      width: '500px',
      data: { product, isEditing: !!product },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((result: Product | null) => {
        if (result) {
          if (product) {
            // Update existing product
            const index = this.products.findIndex((p) => p.id === result.id);
            if (index !== -1) {
              this.products[index] = result;
              console.log('Product edited:', result);
            }
          } else {
            // Add new product
            this.products.push(result);
            console.log('Product added:', result);
          }
          this.filteredProducts = [...this.products];
        }
      });
  }

  deleteProduct(product: Product) {
    const productIndex = this.products.findIndex((e) => e.id === product.id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      this.filteredProducts = [...this.products];
    }
  }

  searchProduct(): void {
    const searchTerm = this.filterForm.get('search')?.value.toLowerCase();

    console.log(searchTerm);
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.barcode.includes(searchTerm)
    );
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
