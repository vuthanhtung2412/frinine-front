import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  mockEventsDb:Event[]=[

  ]
  constructor() { }
}
