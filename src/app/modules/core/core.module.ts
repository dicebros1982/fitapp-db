import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FlexModule } from '../flex/flex.module';
import { ReactiveFormsModule } from '@angular/forms';

const coreModules = [MaterialModule, FlexModule, ReactiveFormsModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
