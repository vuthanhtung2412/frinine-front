import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Location} from '@angular/common';
import {FrinineEvent} from '../../../interfaces/frinineEvent';
import {Ticket} from '../../../interfaces/ticket';

//Dialog imports
import {MatDialog} from '@angular/material/dialog';
import {SucessDialogComponent} from './sucess-dialog/sucess-dialog.component';
import {AuthService} from '../../../app-service/auth.service';
import {EventService} from '../../../app-service/event.service';


// @ts-ignore
@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['create-events.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CreateEventsComponent implements OnInit {

  event: FrinineEvent = {}
  createEventForm: FormGroup;
  createTicketForm: FormGroup; //FORM GROUP FOR THE MAIN TICKET TYPE
  paymentMethodeForm: FormGroup;
  optionalTicketGroup : FormGroup; // FORM GROUP FOR OTHER TICKET

  constructor(
      private _formBuilder: FormBuilder,
      private location: Location,
      public dialog: MatDialog,
      private authService : AuthService,
      private eventService: EventService
  ){
    this.optionalTicketGroup = this._formBuilder.group({
      ticketTypes: this._formBuilder.array([])
    })
  }

  ngOnInit() {

    //TODO : Add clear form control button
    this.createEventForm = this._formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.email,Validators.required]],
      tel: ['',[
          //TODO : Add validator for tel number
          Validators.required
      ]
      ],
      offline: [true],
      online: [false],
      from: [null, Validators.required],
      to: [null, Validators.required],
      location:['',Validators.required],
      link: [''],
      invPlaces: [0],
      capacity: [0],
    });

    this.createTicketForm = this._formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['']
    });

    this.paymentMethodeForm = this._formBuilder.group({
      creditCard: [false, Validators.required],
      paypal: [false, Validators.required]
    })

    this.setValidator()
  }

  //SET CONDITIONAL VALIDATORS FOR LOCATION AND LINK FORM CONTROL
  setValidator(){
    const loc = this.createEventForm.get('location');
    const link = this.createEventForm.get('link')
    const off = this.createEventForm.get('offline')
    const on = this.createEventForm.get('online')

    // LISTEN TO CHANGE IN OFFLINE FORM CONTROL TO DECIDE THE VALIDITY OF LOCATION
    off.valueChanges
        .subscribe(offline => {
          if(offline){
            loc.setValidators(Validators.required)
          } else {
            loc.setValidators(null)
            if(!on.value){
              this.createEventForm.patchValue({
                online: true
              })
            }
          }
          loc.updateValueAndValidity()
        })
    // LISTEN TO CHANGE IN ONLINE FORM CONTROL TO DECIDE THE VALIDITY OF LINK
    on.valueChanges
        .subscribe(online => {
          if(online){
            link.setValidators(Validators.required)
          }else{
            link.setValidators(null)
            if(!off.value){
              this.createEventForm.patchValue({
                offline: true
              })
            }
          }
          link.updateValueAndValidity()
        })
  }

  //Return to homepage
  return(){
    this.location.back()
  }

  openDialog() {
    const dialogRef = this.dialog.open(SucessDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submitEvent(){
    this.event.name = this.createEventForm.get('name').value
    this.event.email = this.createEventForm.get('email').value
    this.event.tel = this.createEventForm.get('tel').value
    this.event.from = new Date(this.createEventForm.get('from').value)
    this.event.to = new Date(this.createEventForm.get('to').value)
    this.event.location = this.createEventForm.get('location').value
    this.event.link = this.createEventForm.get('location').value
    this.event.invPlaces = this.createEventForm.get('invPlaces').value
    this.event.capacity = this.createEventForm.get('capacity').value
    this.event.soldPlaces = 0
    console.log('Event Created !')
  }

  submitTicket(){
    //TODO : Store design and enable pushing file to firestore
    //Add main event type to TicketType list

    this.event.ticketType = []

    this.event.ticketType.push({
          name: this.createTicketForm.get('name').value,
          price: this.createTicketForm.get('price').value,
          description: this.createTicketForm.get('description').value
    })

    //ADD OPTIONAL TICKETTYPE TO THE TICKETTYPE LIST
    for (let t of this.ticketTypes.controls){
      if(t instanceof FormGroup){
        this.event.ticketType.push({
          name: t.get('name').value,
          price:t.get('price').value,
          description: t.get('description').value
        })
      }
    }

    console.log('Tickets Created !')
  }

  submitPaymentMeth(){
    this.event.paymentMeth = []
    if (this.paymentMethodeForm.get('creditCard').value){
      this.event.paymentMeth.push('credit card')
    }
    if (this.paymentMethodeForm.get('paypal').value){
      this.event.paymentMeth.push('paypal')
    }
    console.log('Payment Methodes Added !')
  }

  addEvent(){
    console.log(this.event)
    this.authService.auth.currentUser.then(user => {
      this.event.organiserID = user.uid
      this.eventService.createEvent(this.event)
          .then(r => {})
    })
  }

  // get ticketTypes for array and declare it as a variable
  get ticketTypes() : FormArray{
    return this.optionalTicketGroup.get('ticketTypes') as FormArray
  }

  newTicketType(): FormGroup{
    return this._formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ['']
    })
  }

  //Add form to create multiple ticket type in
  addTicketType(){
    this.ticketTypes.push(this.newTicketType())
    console.log(this.ticketTypes)
  }

  // REMOVE TICKET TYPE AT INDEX i th
  removeTicket(i){
    this.ticketTypes.removeAt(i)
  }
}

