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

  isFlipped = false;

  nums = [1,2,3,4,5]
  user : User;
  events: Event[] = [];
  id : string;
  birthday: any; //Convert birhtday from timestamp type to date type

  timer = 0;
  interval : any
  click = true

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
    this.userService.getUserByID(this.id)
        .subscribe(user =>{
          this.user = user;
          this.birthday = user.birthday.seconds
          console.log(this.user);
          this.getEvents(this.id);
          //console.log(this.events);
        })
  }

  getEvents(id){
    this.eventService.getEventByOrganiser(id).subscribe(
        e => {
          console.log(e)
          this.events = e
        }
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

  deleteEvent(id){
    this.eventService.deleteEvent(id).then(()=>{
      window.location.reload()
    })
  }

  mousedown(){
    this.interval = setInterval(() => {
      if(this.timer < 10) {
        this.timer ++ ;
      } else {
        // ADD ACTION WHILE HOLD
        this.isFlipped = !this.isFlipped
        clearInterval(this.interval)
        console.log('Hold!')
        this.timer = 0
        this.click = false
      }
    },100)
  }

  mouseup(id){
    if(this.timer<10){
      if(this.click){
        //ADD ACTION WHILE CLICK
        this.toEvent(id)
        console.log('Click!')
      }
      this.click = true
      clearInterval(this.interval)
      this.timer = 0
    }
  }

}
