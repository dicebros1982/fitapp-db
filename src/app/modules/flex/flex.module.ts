import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

const flexModules = [FlexLayoutModule];

@NgModule({
  imports: [flexModules],
  exports: [flexModules]
})
export class FlexModule {}
