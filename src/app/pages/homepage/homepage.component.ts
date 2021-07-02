import { Component, OnInit , Input } from '@angular/core';
import { User } from '../../interfaces/user'
import { Event} from '../../interfaces/event';
import { Location } from '@angular/common';
import {ActivatedRoute,Router} from '@angular/router';

// Services
import { UserService } from '../../core/user.service';
import { EventService } from '../../core/event.service';

//interface to defined tile
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
  inputs : ['id']
})
export class HomepageComponent implements OnInit {

  user : User;
  events: Event[];
  id : number;

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
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserByID(this.id).subscribe(user => this.user = user)
    console.log(this.user);

    this.getEvents(this.id)
    console.log(this.events)
  }

  getEvents(id){
    this.eventService.getEventByOrganiser(id).subscribe(
        (e) => this.events = e
    )
  }
  checkClick(){
    console.log("clicked")
  }
  addEvents(){
    this.router.navigate(['menu/add-event']).then()
  }

  toEvent(id){
    this.router.navigate( ['menu/event', id,"1"]).then()
  }
}
