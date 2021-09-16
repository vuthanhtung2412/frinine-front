import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.scss']
})
export class ChangePwdComponent implements OnInit {

  formPwd: FormGroup;
  hide: boolean;
  @Input() user: User;

  constructor(
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.hide = true;
    this.formPwd = this.formBuilder.group({
    });
  }

}
