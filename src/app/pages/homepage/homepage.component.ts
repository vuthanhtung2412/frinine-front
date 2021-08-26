import { Component, OnInit , Input } from '@angular/core';
import {AnonymousUser , User} from '../../interfaces/user';
import { FrinineEvent} from '../../interfaces/event';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { UserService } from '../../app-service/user.service';
import { EventService } from '../../app-service/event.service';
import {Subscription} from "rxjs";

// interface to defined tile
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs : ['id']
})
export class HomepageComponent implements OnInit {

  isFlipped: boolean[];

  user: User;
  events: FrinineEvent[] = [];
  eventsSubscription: Subscription;
  id: string;
  birthday: any; // Convert birhtday from timestamp type to date type

  timer = 0;
  interval: any;
  click = true;

  tiles: Tile[] = [
	{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
	{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
	{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
	{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
	{text: 'Five', cols: 2 , rows: 1, color: 'coral'}
  ];

  constructor(
		private route: ActivatedRoute,
		private location: Location,
		private userService: UserService,
		private eventService: EventService,
		private router: Router,
  ){
  }

  ngOnInit(): void {
	this.id = this.route.snapshot.paramMap.get('id');
	this.user = new AnonymousUser();
	this.userService.userSubject.subscribe((user) => {
		this.user = user;
		this.birthday = user.birthday;
	});
	this.eventsSubscription = this.eventService.eventsSubject.subscribe(
		(events) => {
			this.events = events;
			this.isFlipped = new Array(events.length);
			this.isFlipped.fill(false);
		});
	this.eventService.getEventByOrganiser(this.id);
	this.userService.getUserByID(this.id);
  }

  addEvents(){
	this.router.navigate(['menu/add-event']).then();
  }
  toEventManagement(id){
	this.router.navigate( ['menu/event-management', id]).then();
  }
  deleteEvent(id) {
  	this.eventService.deleteEventPhay(id)
  	//this.eventService.deleteEvent(id).then()
  }

  mousedown(i){
	this.interval = setInterval(() => {
		if (this.timer < 20) {
		this.timer ++ ;
		} else {
		// ADD ACTION WHILE HOLD
		this.isFlipped[i] = !this.isFlipped[i];
		clearInterval(this.interval);
		console.log('Hold!');
		this.timer = 0;
		this.click = false;
		}
	}, 50);
  }

  mouseup(id){
	if (this.timer < 20){
		if (this.click){
		// ADD ACTION WHILE CLICK
		this.toEventManagement(id);
		console.log('Click!');
		}
		this.click = true;
		clearInterval(this.interval);
		this.timer = 0;
	}
  }

}
