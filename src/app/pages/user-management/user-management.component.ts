import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm, Form} from "@angular/forms";
import {OldPwdValidators} from "./old-pwd.validators";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  formPwd: FormGroup;
  formName: FormGroup;
  formEmail: FormGroup;
  formTel: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.formName = this.formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName' : ['',Validators.required],
    })

    this.formEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.formTel = new FormGroup({
      tel: new FormControl('', [Validators.required]),
    });

    this.formPwd = this.formBuilder.group({
      'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });

  }

  changeName(){
    console.log('name changed');
  }
  changeEmail(){
    console.log('email changed');
  }
  changeTel(){
    console.log('phone number changed');
  }

  get oldPwd(){
    return this.formPwd.get('oldPwd');
  }
  get newPwd(){
    return this.formPwd.get('newPwd');
  }
  get confirmPwd(){
    return this.formPwd.get('confirmPwd');
  }


}
