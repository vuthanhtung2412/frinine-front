import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-sucess-dialog',
  templateUrl: './sucess-dialog.component.html',
  styleUrls: ['./sucess-dialog.component.scss']
})
export class SucessDialogComponent implements OnInit {

  constructor(
      private location: Location
  ) { }

  ngOnInit(): void {
  }

  return(){
    this.location.back();
  }
}
