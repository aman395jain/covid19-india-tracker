import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserManagementModule } from "./user-management/user-management.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StateTrackerModule } from "./state-tracker/state-tracker.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    StateTrackerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
