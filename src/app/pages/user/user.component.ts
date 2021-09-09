import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {UserService} from "../../app-service/user.service";
import {AnonymousUser, User} from "../../interfaces/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  userSubscription: Subscription;
  hide = true;
  loading: boolean;
  formPwd: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
  ) {}

  ngOnInit(): void {

    this.user = new AnonymousUser();
    this.userSubscription = this.userService.userSubject.subscribe((user) => {
      this.user = user;
    });
    this.userService.getUserByID('humQK8Mv2FZxkaXTctwKLbI2eHP2');

  }

}
