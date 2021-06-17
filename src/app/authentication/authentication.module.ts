import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import { MaterialModule } from '../shared/material.module'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        LoginComponent, 
        AuthenticationComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent,
        AuthenticationComponent,
        RegisterComponent
    ]
})
export class AuthenticationModule { }