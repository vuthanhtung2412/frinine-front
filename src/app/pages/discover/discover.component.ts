import { Component, OnInit } from '@angular/core';
import { Event } from '../../interfaces/event';
import {EventService} from '../../app-service/event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  events: Event[]

  constructor(
      private eventService: EventService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.eventService.getEvents().subscribe(
        (e) => this.events = e
    )
  }

  toEvent(id){}
}
