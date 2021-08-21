import { Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {FrinineEvent} from '../../../../interfaces/event';
import {EventService} from '../../../../app-service/event.service';
import {Location} from '@angular/common';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
  inputs: ['event']
})
export class EventInfoComponent implements OnInit, OnChanges{

  updateDisabled = true ;
  updateEventForm : FormGroup;
  event : FrinineEvent;
  id: string;

  // IN ORDER TO DISPLAY VALUE IN INPUT CORRECTLY
  dateFrom : string;
  dateTo: string;

  //MAT CHIPS FOR PAYMENT METHOD
  selectable = true;
  removable = true;
  payCtrl = new FormControl();
  chosenMethods: string[];
  allMethods: string[] = ['credit card', 'paypal'];
  availableMethods: string[] = this.allMethods;
  input = true;

  @ViewChild('payInput') payInput: ElementRef<HTMLInputElement>;

  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private eventService: EventService,
      private _builder: FormBuilder,
  ){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

  ngOnChanges( changes: SimpleChanges){
    console.log(changes.event.currentValue)
    //console.log(this.event)
    // changes.event.currentValue = this.event
    console.log(changes.event.currentValue.from)
    console.log(changes.event.currentValue.to)
    //this.buildUpdateForm();
    // The problem is the date is invalid, if date is invalid form can be built
    this.dateFrom = this.event.from.toISOString().slice(0,16);
    this.dateTo = this.event.to.toISOString().slice(0,16);
    this.buildUpdateForm();
    this.chosenMethods = this.event.paymentMeth
    this.updateChosenMethods()
    this.updateEventForm.valueChanges.subscribe(val =>{
      this.updateDisabled = false
    })
  }
  buildUpdateForm(){
    this.updateEventForm = this._builder.group({
      name: [this.event.name, Validators.required],
      email: [this.event.email, [Validators.email,Validators.required]],
      tel: [this.event.tel,[
        //TODO : Add validator for tel number
        Validators.required
      ]
      ],
      from: [this.dateFrom, Validators.required],
      to: [this.dateTo, Validators.required],
      location:[this.event.location,Validators.required],
      link: [this.event.link],
      invPlaces: [this.event.invPlaces],
      capacity: [this.event.capacity],
    })
  }

  submitUpdateEvent(){
    console.log('event updated')
    this.updateEventForm.patchValue({from: new Date(this.updateEventForm.get('from').value)})
    this.updateEventForm.patchValue({to: new Date(this.updateEventForm.get('to').value)})
    this.updateEventForm.addControl('paymentMeth', this.payCtrl )
    this.eventService.updateEvent(this.updateEventForm.value,this.id)
        .then(() => {
          window.location.reload()
        })
  }

  //MAT CHIPS METHODES
  remove(fruit: string): void {
    const index = this.chosenMethods.indexOf(fruit);

    if (index >= 0) {
      this.chosenMethods.splice(index, 1);
    }
    this.updateChosenMethods();
    this.updateDisabled = false
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chosenMethods.push(event.option.viewValue);
    //this.fruitInput.nativeElement.value = '';
    this.payCtrl.setValue(null);
    this.updateChosenMethods();
    this.updateDisabled = false
  }

  updateChosenMethods() {
    this.availableMethods = this.allMethods.filter(n => !this.chosenMethods.includes(n));
    this.input = this.availableMethods.length != 0;
    this.payCtrl.patchValue(this.chosenMethods)
  }
}
