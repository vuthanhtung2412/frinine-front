import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../../core/event.service';
import { Event } from '../../interfaces/event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event : Event;
  isAuthor = Number(this.route.snapshot.paramMap.get('isAuthor'));

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventByID(id).
        subscribe(event => this.event = event)
  }
}
