import { Component, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Ticket} from '../../../../interfaces/ticket';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EventService} from '../../../../app-service/event.service';
import firebase from 'firebase';
import database = firebase.database;

interface eventData {
  index : number,
  tickets: Ticket[]
}
let id : string
@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss'],
  inputs: ['ticketType']
})
export class TicketManagementComponent implements OnInit, OnChanges {

  ticketType: Ticket[] =[]
  constructor(
      private route: ActivatedRoute,
      private dialog : MatDialog,
      private eventService : EventService
  ) { }

  ngOnInit(): void {
    id = this.route.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.ticketType)
  }

  printTickets(){
    console.log(this.ticketType)
  }

  deleteTicket(i){
    console.log(this.ticketType[i].name + ' is deleted')
    this.ticketType.splice(i,1)
    this.eventService.updateEvent({ticketType: this.ticketType}, id)
        .then(r => {

        })
  }

  openUpdateTicketDialog(index){
    console.log(this.ticketType[index])
    const updateDialogRef = this.dialog.open(DialogUpdateTicket, {
      width: '50%',
      data: {index: index , tickets: this.ticketType}
    });
  }
  openCreateTicketDialog(){
    const createDialogRef = this.dialog.open(DialogCreateTicket, {
      width: '50%',
      data: this.ticketType
    });
  }
}
//////////////////////////////////////////////////////////////////
@Component({
  selector: 'dialog-create-ticket',
  templateUrl: 'dialog-create-ticket.html'
})
export class DialogCreateTicket {

  createForm: FormGroup

  constructor(
      public createDialogRef : MatDialogRef<DialogCreateTicket>,
      private _builder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data : Ticket[],
      private eventService : EventService
  ) {
    this.createForm = this._builder.group({
      name: ['', Validators.required],
      price: ['',Validators.required],
      description:['']
    })
  }

  createTicket(){
    // this data is two way binding between the dialog and the dialog opener
    this.data.push(this.createForm.value)
    console.log('Create')
    //console.log(id)
    this.eventService.updateEvent(
        {ticketType: this.data},
        id
    ).then(r => {

    })
  }
}

//////////////////////////////////////////////////////////////
@Component({
  selector: 'dialog-update-ticket',
  templateUrl: 'dialog-update-ticket.html'
})
export class DialogUpdateTicket {

  updateForm: FormGroup

  constructor(
      public updateDialogRef: MatDialogRef<DialogUpdateTicket>,
      @Inject(MAT_DIALOG_DATA) public data : eventData,
      private _builder: FormBuilder,
      private eventService : EventService
  ) {
    this.updateForm = this._builder.group({
      name: [data.tickets[data.index].name, Validators.required],
      price: [data.tickets[data.index].price.toString(),Validators.required],
      description:[data.tickets[data.index].description]
    })
  }

  updateTicket(){
    console.log('Update')
    this.data.tickets[this.data.index]=this.updateForm.value
    //console.log(this.data.tickets)
    this.eventService.updateEvent(
        {ticketType: this.data.tickets},
        id
    ).then(r => {

    })
  }
}
