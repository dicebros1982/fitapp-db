import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FlexModule } from "../flex/flex.module";

const coreModules = [MaterialModule, FlexModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
