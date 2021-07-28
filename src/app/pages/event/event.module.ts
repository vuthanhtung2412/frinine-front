import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateEventsComponent} from './create-events/create-events.component';
import {SucessDialogComponent} from './create-events/sucess-dialog/sucess-dialog.component';
import {EventManagementComponent} from './event-management/event-management.component';
import {EventManagementModule} from './event-management/event-management.module';



@NgModule({
  declarations: [CreateEventsComponent, SucessDialogComponent, EventManagementComponent],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		EventManagementModule
	],
  exports: [
    CreateEventsComponent,EventManagementComponent
  ]
})
export class EventModule{

}
