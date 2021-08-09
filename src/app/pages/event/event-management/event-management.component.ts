import {Component, OnInit} from '@angular/core';
import {defaultEvent, FrinineEvent} from '../../../interfaces/event';
import {EventService} from '../../../app-service/event.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  event: FrinineEvent = defaultEvent;
  eventSubscription: Subscription;
  dayFrom: string;
  dayTo: string;
  id: string;

  constructor(
		private route: ActivatedRoute,
		private eventService: EventService,
		private _builder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.eventService.getEventByID(this.id);
      this.eventSubscription = this.eventService.eventSubject.subscribe(event => this.event = event);
  }

  parseDay(event){
	this.event.from = new Date(event.from.seconds * 1000);
	this.event.to = new Date(event.to.seconds * 1000);
  }
}
