import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from "@angular/material";

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
