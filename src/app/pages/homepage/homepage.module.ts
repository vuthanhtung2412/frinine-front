import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { HomepageComponent } from './homepage.component';
import { StatsComponent } from './stats/stats.component';
import { MyEventsComponent } from './my-events/my-events.component';

@NgModule({
  declarations: [HomepageComponent, StatsComponent, MyEventsComponent],
	imports: [
		CommonModule,
		MaterialModule,
	],
  exports : [HomepageComponent]
})
export class HomepageModule { }
