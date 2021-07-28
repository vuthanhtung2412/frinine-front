import { Component, OnInit , EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../app-service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    inputs:['isFlipped'],
    outputs:['signInEvent']
})
export class LoginComponent implements OnInit {

    signInEvent = new EventEmitter<boolean>(); // Pass event to parent works
    isFlipped : boolean; //Parent to child binding works
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() : void{
    this.buildForm()
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required] ],
            'password': ['', [Validators.required] ],
        });
    }

    login(): void {
        this.authService.login ( this.loginForm.value['username'], this.loginForm.value['password'])
        //if (this.authService.login ( this.loginForm.value['username'], this.loginForm.value['password'])){
        //   this.router.navigate(['menu/homepage/1']).then()
        //}
    }

    click(){
        console.log('Register clicked');
        this.signInEvent.emit(!this.isFlipped);
        console.log('Card is flipped ' + !this.isFlipped);
    }
}
