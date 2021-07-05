import { Component, OnInit, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  inputs:['isFlipped'],
  outputs:['signUpEvent']
})
export class RegisterComponent implements OnInit {

  signUpEvent = new EventEmitter<boolean>(); // Pass event to parent works
  isFlipped : boolean; //Parent to child binding works
  signUpForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private authService: AuthService
  ) { }

  ngOnInit() : void{
    this.buildForm()
  }

  buildForm() {
    this.signUpForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'email':['',[Validators.required,Validators.email]],
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'gender': ['',[Validators.required]],
      'date-of-birth':['',[Validators.required]]
    });
  }

  signUp(): void {
    this.authService.signUp(
        this.signUpForm.value['email'],
        this.signUpForm.value['password'],
        this.signUpForm.value['name'],
        this.signUpForm.value['surname'],
        this.signUpForm.value['gender'],
        this.signUpForm.value['date-of-birth'],
        this.signUpForm.value['username']
    );
    this.router.navigate(['menu/homepage/1']).then()
  }

  click(){
    console.log('Sign In clicked');
    this.signUpEvent.emit(!this.isFlipped);
    console.log('Card is flipped ' + !this.isFlipped);
  }
}
