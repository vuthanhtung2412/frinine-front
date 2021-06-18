import {User} from './user'

export interface Event{
	id : number;
	name: string;
	location: string;
	capacity : number;
	organiserID: number;
}