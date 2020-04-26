// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { StateTrackerComponent } from "./state-tracker.component";
import { CovidMaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, CovidMaterialModule],
  declarations: [StateTrackerComponent],
  exports: [StateTrackerComponent],
})
export class StateTrackerModule {}
