import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
