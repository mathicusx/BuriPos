import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_FORMATS,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
} from '@angular/material/core';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MaterialComponent = [
  MatProgressBarModule,
  MatMenuModule,
  MatCardModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatRadioModule,
  MatButtonModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatCheckboxModule,
  MatStepperModule,
  MatDialogModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatSlideToggleModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponent, CommonModule, ReactiveFormsModule, FormsModule],
  exports: [MaterialComponent],
})
export class MaterialModule {}
