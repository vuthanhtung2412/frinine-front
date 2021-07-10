import {User} from './user'
import {Time} from '@angular/common';
import {Ticket} from './ticket';
import {Duration} from './duration';

export interface Event{
	id? : string;
	name?: string;
	email? : string;
	tel? : string;
	date? : Date;
	time?: Time;
	duration ?: Duration;
	location?: string;
	link? : string;
	invPlaces ?: number;
	soldPlaces ?: number;
	capacity ?: number;
	organiserID ?: string;
	ticketType?: Ticket[]
	paymentMeth ?: string[];
}