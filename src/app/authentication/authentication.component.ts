import { Component, OnInit } from '@angular/core';
import {AuthService} from '../app-service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isFlipped = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  flip(){
    this.isFlipped = !this.isFlipped;
    console.log('Card is flipped ' + this.isFlipped);
  }
}
