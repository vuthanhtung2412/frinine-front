import { Component, OnInit } from '@angular/core';
import {FrinineEvent} from '../../../interfaces/event';
import {EventService} from '../../../app-service/event.service';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../../../interfaces/ticket';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event : FrinineEvent
  id : string
  tickets : Ticket[] = []

  constructor(
      private eventService: EventService,
      private route : ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getEvent()
    this.getTickets()
  }

  getEvent(){
    this.eventService.getEventByIDTest(this.id)
    this.eventService.eventSubject.subscribe(
        (event) =>{
          this.event = event
        }
    )
  }

  getTickets(){
    this.eventService.getTicketsByEvent(this.id).then()
    this.eventService.ticketsSubject.subscribe(
        (tickets) => {
          this.tickets = tickets
    }
    )
  }
}
