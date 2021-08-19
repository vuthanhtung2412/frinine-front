import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent} from "./user-management.component";
import { MaterialModule } from '../../shared/material.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [UserManagementComponent]
})
export class UserManagementModule { }
