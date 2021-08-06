import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventInfoComponent } from './event-info/event-info.component';
import {CalendarComponent} from './calendar/calendar.component';
import {MaterialModule} from '../../../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogCreateTicket, DialogUpdateTicket, TicketManagementComponent} from './ticket-management/ticket-management.component';



@NgModule({
  declarations: [EventInfoComponent,
	  CalendarComponent,
	  TicketManagementComponent,
	  DialogCreateTicket,
	  DialogUpdateTicket
  ],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	],
  exports:[EventInfoComponent,
	  CalendarComponent,
	  TicketManagementComponent,
	  DialogCreateTicket,
	  DialogUpdateTicket
  ]
})
export class EventManagementModule { }
