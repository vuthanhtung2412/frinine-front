import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formChange: FormGroup;
  @Input() user: User;
  constructor(
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formChange = this.formBuilder.group({
      'name': ['',Validators.required],
      'surname': ['',Validators.required],
      'email': ['',Validators.required, Validators.email],
      'phone': ['',Validators.required],
    });
  }
  saveChange(){

  }

}
