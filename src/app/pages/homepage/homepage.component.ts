import { Component, OnInit , Input } from '@angular/core';
import { User } from '../../interfaces/user'
import { FrinineEvent} from '../../interfaces/frinineEvent';
import { Location } from '@angular/common';
import {ActivatedRoute,Router} from '@angular/router';

// Services
import { UserService } from '../../app-service/user.service';
import { EventService } from '../../app-service/event.service';

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

  isFlipped : boolean[];

  user : User;
  events: FrinineEvent[] = [];
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
          this.isFlipped = new Array(e.len)
          this.isFlipped.fill(false)
        }
    )
  }
  checkClick(){
    console.log("clicked")
  }
  addEvents(){
    this.router.navigate(['menu/add-event']).then()
  }
  toEventManagement(id){
    this.router.navigate( ['menu/event-management',id]).then()
  }
  deleteEvent(id){
    this.eventService.deleteEvent(id).then(()=>{
      window.location.reload()
    })
  }

  mousedown(i){
    this.interval = setInterval(() => {
      if(this.timer < 20) {
        this.timer ++ ;
      } else {
        // ADD ACTION WHILE HOLD
        this.isFlipped[i] = !this.isFlipped[i]
        clearInterval(this.interval)
        console.log('Hold!')
        this.timer = 0
        this.click = false
      }
    },50)
  }

  mouseup(id){
    if(this.timer<20){
      if(this.click){
        //ADD ACTION WHILE CLICK
        this.toEventManagement(id)
        console.log('Click!')
      }
      this.click = true
      clearInterval(this.interval)
      this.timer = 0
    }
  }

}
