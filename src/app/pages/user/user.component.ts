import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../../core/user.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user : User;
  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserByID(id).subscribe(user => this.user = user)
  }

}
