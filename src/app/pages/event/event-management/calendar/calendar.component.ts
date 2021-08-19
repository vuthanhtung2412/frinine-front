import { Component, OnInit } from '@angular/core';
import {FrinineEvent} from '../../../../interfaces/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  inputs: ['event']
})
export class CalendarComponent implements OnInit {

  event: FrinineEvent

  weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  arr = Array(35).fill(0)
  currdate = new Date()
  month = this.currdate.getMonth();
  year = this.currdate.getFullYear();
  days : Date[];

  checkMY: boolean

  constructor() {
  }

  ngOnInit(): void {
    this.fillDays()
    this.checkMY = this.year==this.event.from.getFullYear() && this.month==this.event.from.getMonth()
    //console.log(this.event.date.getDate())
  }

  checkMonthYear(){
    this.checkMY = this.year==this.event.from.getFullYear() && this.month==this.event.from.getMonth()
  }

  getMonth():string{
    switch (this.month){
      case 0:
        return 'January'
      case 1:
        return 'February'
      case 2:
        return 'March'
      case 3:
        return 'April'
      case 4:
        return 'May'
      case 5:
        return 'June'
      case 6:
        return 'July'
      case 7:
        return 'August'
      case 8:
        return 'September'
      case 9:
        return 'October'
      case 10:
        return 'November'
      case 11:
        return 'December'
    }
  }

  fillDays(){
    this.days = []
    let date = new Date(this.year,this.month,1);
    while (date.getMonth() === this.month) {
      this.days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }

  nextMonth(){
    if (this.month == 11){
      this.month = 0
      this.year ++
    }else{
      this.month ++
    }
    this.checkMonthYear()
    this.getMonth()
    this.fillDays()
  }

  preMonth(){
    if (this.month == 0){
      this.month = 11
      this.year --
    }else{
      this.month --
    }
    this.checkMonthYear()
    this.getMonth()
    this.fillDays()
  }
}
