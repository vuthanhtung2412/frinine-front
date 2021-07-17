import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Ticket} from '../../../../interfaces/ticket';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss'],
  inputs: ['ticketType']
})
export class TicketManagementComponent implements OnInit, OnChanges {

  id: string
  ticketType: Ticket[] =[]
  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.ticketType)
  }

}
