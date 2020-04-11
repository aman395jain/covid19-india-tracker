// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { UserManagementComponent } from "./user-management.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CovidMaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, CovidMaterialModule],
  declarations: [UserManagementComponent, RegisterComponent],
  exports: [UserManagementComponent, RegisterComponent],
})
export class UserManagementModule {}
