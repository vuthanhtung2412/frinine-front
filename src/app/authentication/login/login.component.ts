import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../core/auth.service';
import { User } from '../../interfaces/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }
  
  loginForm: FormGroup;

  // show an spinner while the data is being verified
  showSpinner = false;

  ngOnInit() : void{
    this.buildForm()
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
        'username': ['',
            [
                Validators.required
            ]
        ],
        'password': ['',
            [
                Validators.required
            ]
        ],
    });
  }

  login(): void {
    this.authService.login(
        this.loginForm.value['username'],
        this.loginForm.value['password']
    );
}
}
