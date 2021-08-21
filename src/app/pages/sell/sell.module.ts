import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { MaterialModule } from '../../shared/material.module';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [SellComponent, EventComponent],
	imports: [
		CommonModule,
		MaterialModule,
	],
  exports: [SellComponent, EventComponent]
})
export class SellModule { }
