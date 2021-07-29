import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [SellComponent],
	imports: [
		CommonModule,
		MaterialModule,
	],
  exports: [SellComponent]
})
export class SellModule { }
