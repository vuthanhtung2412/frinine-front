import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  isAuthor = Number(this.route.snapshot.paramMap.get('isAuthor'));

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      private userService: UserService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(id).
        subscribe(event => {
          this.event = event;
          this.time = event.time.seconds
          console.log(event)
          this.getOrganiserEmail(event.organiserID)
        })

  }

  getOrganiserEmail(id){
    this.userService.getUserByID(id).subscribe(u =>{
      this.organiserMail = u.email
    })
  }
}
