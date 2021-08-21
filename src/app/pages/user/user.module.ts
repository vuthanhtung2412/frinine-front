import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent} from "./user.component";
import { MaterialModule } from '../../shared/material.module';
import {ReactiveFormsModule, Validators} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {ChangePwdComponent} from "./change-pwd/change-pwd.component";


@NgModule({
  declarations: [UserComponent, ProfileComponent, ChangePwdComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
