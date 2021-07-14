import {Component, OnInit} from '@angular/core';
import {Event} from '../../interfaces/event';
import {EventService} from '../../app-service/event.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  updateEvent: Event = {}
  updateEventForm : FormGroup;
  event : Event
  day : string;

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      private _builder: FormBuilder
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(id).subscribe(e =>{
      this.event = e
      this.parseDay(e);
      this.buildUpdateForm()
    })
  }

  ngOnInit(): void {

  }

  buildUpdateForm(){
    this.updateEventForm = this._builder.group({
      name: [this.event.name, Validators.required],
      email: [this.event.email, [Validators.email,Validators.required]],
      tel: [this.event.tel,[
        //TODO : Add validator for tel number
        Validators.required
      ]
      ],
      date: [this.event.date, Validators.required],
      time: [this.event.time, Validators.required],
      durationD: [this.event.duration.days, [
        Validators.max(5),
        Validators.min(0)
      ]],
      durationH: [this.event.duration.hours, [
        Validators.max(23),
        Validators.min(0)
      ]],
      durationM: [this.event.duration.minutes,[
        Validators.min(0),
        Validators.max(59)
      ]],
      location:[this.event.location,Validators.required],
      link: [this.event.link],
      invPlaces: [this.event.invPlaces],
      capacity: [this.event.capacity],
    })
  }

  submitUpdateEvent(){}

  parseDay(event){
    this.event.date = new Date(event.date.seconds*1000)
    switch (this.event.date.getDay()){
      case 0:
        this.day = "Sunday";
        break;
      case 1:
        this.day = "Monday";
        break;
      case 2:
        this.day = "Tuesday";
        break;
      case 3:
        this.day = "Wednesday";
        break;
      case 4:
        this.day = "Thursday";
        break;
      case 5:
        this.day = "Friday";
        break;
      case 6:
        this.day = "Saturday";
    }
  }

  getEvent(){
    /*
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(id).
    subscribe(event => {
      this.event = event;
      this.event.date = new Date(event.date.seconds*1000)
      switch (this.event.date.getDay()){
        case 0:
          this.day = "Sunday";
          break;
        case 1:
          this.day = "Monday";
          break;
        case 2:
          this.day = "Tuesday";
          break;
        case 3:
          this.day = "Wednesday";
          break;
        case 4:
          this.day = "Thursday";
          break;
        case 5:
          this.day = "Friday";
          break;
        case 6:
          this.day = "Saturday";
      }
      //console.log(event)
    })
    */
  }
}
