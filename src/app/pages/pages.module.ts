import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover/discover.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import {MaterialModule} from '../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SucessDialogComponent } from './create-events/sucess-dialog/sucess-dialog.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { CalendarComponent } from './event-management/calendar/calendar.component';



@NgModule({
	declarations: [DiscoverComponent, CreateEventsComponent, SucessDialogComponent, EventManagementComponent, CalendarComponent],
	exports: [
		DiscoverComponent,CreateEventsComponent,EventManagementComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class PagesModule { }
