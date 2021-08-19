import {Injectable} from '@angular/core';
import {FrinineEvent, defaultEvent} from '../interfaces/event';
import {Observable, of, Subject} from 'rxjs';
import {Ticket} from '../interfaces/ticket';
import { AngularFirestore } from '@angular/fire/firestore';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

	event : FrinineEvent;
	events: FrinineEvent[];

	eventsSubject: Subject<FrinineEvent[]>;
	eventSubject: Subject<FrinineEvent>;

  constructor(
		private db: AngularFirestore
  ) {
  	this.event = defaultEvent
  	this.events = [];
  	this.eventSubject = new Subject<FrinineEvent>();
  	this.eventsSubject = new Subject<FrinineEvent[]>();
  }

  parseDay(event): FrinineEvent{
  	let e = event
  	e.from = new Date(event.from.seconds*1000)
	  e.to = new Date(event.to.seconds*1000)

	  return e
  }

  getEventByID(id) {
	 return this.db
		.collection('events')
		.doc(id)
		.valueChanges()
  }

  getEventByIDTest(id) {
  	this.db
	    .collection('events')
	    .doc(id)
	    .valueChanges().subscribe(
	    	(event: FrinineEvent) =>{
				this.event = this.parseDay(event)
			    this.eventSubject.next(this.event)
			})
  }

	getEventByOrganiser(id) {
  		this.db
			.collection('events', ref => ref.where('organiserID', '==', id))
			.valueChanges({idField: 'id'}).subscribe(
				(events: FrinineEvent[]) => {
					this.events = events;
					this.eventsSubject.next(this.events);
				},
				(error) => {
					console.error(error);
				}
			);
	}

  deleteEvent(id){
	return this.db
		.collection('events')
		.doc(id)
		.delete();
  }

  deleteEventPhay(id){
  	this.db
	    .collection('events')
	    .doc(id)
	    .valueChanges()
	    .subscribe(
		    (e: FrinineEvent)=>{
		    	e.tickets.forEach( ticketid =>{
		    		this.deleteTicket(ticketid)
			    })
		    }
	    )
  	this.deleteEvent(id).then()
  }

  createEvent(e: FrinineEvent){
	return new Promise<any>((resolve, reject) => {
		this.db
			.collection('events')
			.add(e)
			.then(response => { console.log(response); }, error => reject(error));
	});
  }

  async createEventPhay(e: FrinineEvent){
	  return new Promise<any>((resolve, reject) => {
		  this.db
			  .collection('events')
			  .add(e)
			  .then(
			  	async response => {
			  		let tickets = []
				    for (let t of e.ticketType) {
					    t.eventid = response.id
					    const {id} = await this.db
						    .collection('products')
						    .add(t)
					    tickets.push(id)
				    }
				    await this.updateEvent({tickets : tickets},response.id)
				    },error => {reject(error)});
	  });
  }

  updateEvent(updates, id) {
	return this.db
		.collection('events')
		.doc(id)
		.update(updates);
  }

  getAllEvents(){
  	this.db
	    .collection('events')
	    .valueChanges({idField: 'id'})
	    .subscribe(
		    (events : FrinineEvent[]) =>{
	    		this.events = events.map(e => this.parseDay(e))
			    this.eventsSubject.next(this.events)
		    }
	    )
  }

  async createTicket(eid,t){
  	const {id} = await this.db
	    .collection('products')
	    .add(t)

	  let tickets = []

	  this.db
		  .collection('events')
		  .doc(eid)
		  .valueChanges()
		  .pipe(first())
		  .toPromise()
		  .then(
			  (e:FrinineEvent) => {
			  	  tickets = e.tickets
				  tickets.push(id)
				  this.updateEvent({tickets: tickets},eid)
		    }
		  )
  }

  deleteTicket(tid){
  	this.db
	    .collection('products')
	    .doc(tid)
	    .delete()
	    .then()
  }

  getTicket(id){}

  /*getUserDoc(id) {
    return this.angularFirestore
        .collection('user-collection')
        .doc(id)
        .valueChanges()
  }

  getUserList() {
    return this.angularFirestore
        .collection("user-collection")
        .snapshotChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
          .collection("user-collection")
          .add(user)
          .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteUser(user) {
    return this.angularFirestore
        .collection("user-collection")
        .doc(user.id)
        .delete();
  }

  updateUser(user: User, id) {
    return this.angularFirestore
        .collection("user-collection")
        .doc(id)
        .update({
          name: user.name,
          email: user.email,
          contact: user.contact
        });
  }*/
}
