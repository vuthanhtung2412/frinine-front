import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FrinineEvent} from '../../../../interfaces/event';
import {EventService} from '../../../../app-service/event.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
  inputs: ['event']
})
export class EventInfoComponent implements OnInit, OnChanges{

  updateDisabled = true ;
  updateEventForm: FormGroup;
  event: FrinineEvent;
  dateFrom: string;
  dateTo: string;
  id: string;

  constructor(
		private location: Location,
		private route: ActivatedRoute,
		private eventService: EventService,
		private _builder: FormBuilder,
  ){
	this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

  ngOnChanges( changes: SimpleChanges){
	console.log(changes.event.currentValue);
	// console.log(this.event)
	// changes.event.currentValue = this.event
	console.log(changes.event.currentValue.from);
	console.log(changes.event.currentValue.to);
	// this.buildUpdateForm();
	// The problem is the date is invalid, if date is invalid form can be built
	this.dateFrom = this.event.from.toISOString().slice(0, 16);
	this.dateTo = this.event.to.toISOString().slice(0, 16);
	this.buildUpdateForm();
	this.updateEventForm.valueChanges.subscribe(val => {
		this.updateDisabled = false;
	});
  }
  buildUpdateForm(){
	this.updateEventForm = this._builder.group({
		name: [this.event.name, Validators.required],
		email: [this.event.email, [Validators.email, Validators.required]],
		tel: [this.event.tel, [
		// TODO : Add validator for tel number
		Validators.required
		]
		],
		from: [this.dateFrom, Validators.required],
		to: [this.dateTo, Validators.required],
		location: [this.event.location, Validators.required],
		link: [this.event.link],
		invPlaces: [this.event.invPlaces],
		capacity: [this.event.capacity],
	});
  }

  submitUpdateEvent(){
	console.log('event updated');
	this.updateEventForm.patchValue({from: new Date(this.updateEventForm.get('from').value)});
	this.updateEventForm.patchValue({to: new Date(this.updateEventForm.get('to').value)});
	this.eventService.updateUser(this.updateEventForm.value, this.id)
		.then(() => {
			window.location.reload();
		});
  }

}
