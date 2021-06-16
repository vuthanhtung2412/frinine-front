import { Component, OnInit , Input } from '@angular/core';
import { User } from '../interfaces/user'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../core/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user : User;
  sidenavOpened = false;

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
