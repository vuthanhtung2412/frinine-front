import {User} from './user'

export interface Event{
	id? : string;
	name: string;
	online?: boolean;
	offline?: boolean;
	location?: string;
	link? : string;
	date? : string
	time?: string;
	duration ?: number;
	invPlaces ?: number;
	soldPlaces ?: number;
	capacity : number;
	organiserID: string;
}