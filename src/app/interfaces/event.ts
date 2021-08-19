import {Ticket} from './ticket';

export interface FrinineEvent{
	id?: string;
	name?: string;
	email?: string;
	tel?: string;
	from?: Date;
	to?: Date;
	location?: string;
	link?: string;
	invPlaces ?: number;
	soldPlaces ?: number;
	capacity ?: number;
	organiserID ?: string;
	ticketType?: Ticket[];
	tickets ?: string[]
	paymentMeth ?: string[];
}
export const defaultEvent: FrinineEvent = {
	id : null,
	name : 'DEFAULT EVENT',
	email : 'example-gmail@gmail.com',
	tel: '000-000-0000',
	from: new Date(),
	to : new Date(),
	location: 'DEFAULT LOCATION',
	link: 'DEFAULT LINK',
	invPlaces: 0,
	capacity: 0,
	organiserID: '00000000000',
	ticketType: [
		{
			name: 'DEFAULT TICKET',
			price: 0,
			description: 'LOADING'
		}
	],
	tickets: [],
	paymentMeth: []
};
