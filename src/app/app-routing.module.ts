import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./user-management/register/register.component";
import { StateTrackerComponent } from "./state-tracker/state-tracker.component";

const routes: Routes = [
  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "stateTracker/:id", component: StateTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
