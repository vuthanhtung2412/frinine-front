import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [HomepageComponent]
})
export class HomepageModule { }
