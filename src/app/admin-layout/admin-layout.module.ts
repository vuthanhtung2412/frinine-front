import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import {MaterialModule} from '../shared/material.module';
import {HomepageModule} from '../pages/homepage/homepage.module';
import {PagesModule} from '../pages/pages.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AdminLayoutComponent],
    imports: [
        CommonModule,
        MaterialModule,
        HomepageModule,
        PagesModule,
        RouterModule
    ],
  exports:[AdminLayoutComponent]
})
export class AdminLayoutModule { }
