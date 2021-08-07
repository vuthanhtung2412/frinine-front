import { Component, OnInit } from '@angular/core';
import {FrinineEvent} from '../../interfaces/event';
import {Router} from '@angular/router';
import {EventService} from '../../app-service/event.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  events : FrinineEvent[] = []

  constructor(
      private router: Router,
      private eventService : EventService,
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.eventService.getAllEvents()
    this.eventService.eventsSubject.subscribe(
        (events) =>{
          this.events = events
        }
    )
  }

  toEvent(id){
    this.router.navigate(['menu/event',id]).then()
  }
}
