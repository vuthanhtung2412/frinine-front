import { Component, OnInit , Input } from '@angular/core';
import { User } from '../interfaces/user'
import { Location } from '@angular/common';
import { UserService } from '../core/user.service';

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
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user : User;
  sidenavOpened = false;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(
    private userService: UserService,
    private location: Location,
  ) { 
  }

  ngOnInit(): void {
    this.user = this.userService.getUserById(1)
    console.log(this.user)
  }
}
