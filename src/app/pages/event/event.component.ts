import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../core/event.service';
import { UserService} from '../../core/user.service';
import { Event } from '../../interfaces/event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event : Event;
  time: any // Date of the event
  organiserMail: any

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(id).
        subscribe(event => {
          this.event = event;
          this.time = event.date.seconds
          console.log(event)
        })
  }

}
