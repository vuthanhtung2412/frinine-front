import {User} from './user'

export interface Event{
	id : number;
	name: string;
	location: string;
	time ?: string;
	duration ?: string;
	invPlaces ?: number;
	capacity : number;
	organiserID: number;
}