import {Component, OnInit} from '@angular/core';
import {defaultEvent, FrinineEvent} from '../../../interfaces/event';
import {EventService} from '../../../app-service/event.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  event : FrinineEvent = defaultEvent;
  dayFrom : string;
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

    /*
    this.eventService.getEventByID(this.id).subscribe(e =>{
      this.event = e
      this.parseDay(e);
    })
    */
    this.eventService.getEventByIDTest(this.id)
    this.eventService.eventSubject.subscribe(
        e =>{
          this.event = e
        })
  }
}
