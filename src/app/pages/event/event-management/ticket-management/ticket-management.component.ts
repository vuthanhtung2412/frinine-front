import { Component, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Ticket} from '../../../../interfaces/ticket';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EventService} from '../../../../app-service/event.service';

interface eventData {
  index : number,
  ticketTypes: Ticket[],
  tickets: string[]
}
let id : string
@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss'],
  inputs: ['ticketType','tickets']
})
export class TicketManagementComponent implements OnInit, OnChanges {

  ticketType: Ticket[] =[]
  tickets : string[] = []


  constructor(
      private route: ActivatedRoute,
      private dialog : MatDialog,
      private eventService : EventService
  ) { }

  ngOnInit(): void {
    id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.eventService.getTicketsByEvent(id).then()
    this.eventService.ticketsSubject.subscribe(
        (tickets) =>{
          this.ticketType = tickets
        }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.tickets)
  }

  printTickets(){
    console.log(this.ticketType)
  }

  deleteTicket(i){
    this.eventService.deleteTicket(this.tickets[i])
    this.tickets.splice(i,1)
    this.eventService.updateEvent({tickets : this.tickets}, id).then(e => {
      window.location.reload();
    })
  }

  openUpdateTicketDialog(index){
    console.log(this.ticketType[index])
    const updateDialogRef = this.dialog.open(DialogUpdateTicket, {
      width: '50%',
      data: {index: index , ticketTypes: this.ticketType , tickets: this.tickets}
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
      price: [0,[Validators.required,Validators.min(0)]],
      description:[''],
      quantity : [1, Validators.min(1)],
      sold : 0,
      eventid : id
    })
  }

  createTicket(){
    // this data is two way binding between the dialog and the dialog opener
    this.data.push(this.createForm.value)
    console.log('Create')
    //console.log(id)
    this.eventService.createTicket(id, this.createForm.value).then()
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
      eventid : id,
      name: [data.ticketTypes[data.index].name, Validators.required],
      price: [data.ticketTypes[data.index].price.toString(),Validators.required],
      description:[data.ticketTypes[data.index].description],
      quantity : [data.ticketTypes[data.index].quantity]
    })
  }

  updateTicket(){
    console.log('Update')
    this.data.ticketTypes[this.data.index]=this.updateForm.value
    //console.log
    this.eventService.updateTicket(this.data.tickets[this.data.index],this.updateForm.value)
    this.eventService.updateEvent(
        {ticketType: this.data.tickets},
        id
    ).then()
  }
}