import {Injectable} from '@angular/core';
import {FrinineEvent, defaultEvent} from '../interfaces/event';
import {Observable, of, Subject} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
  	this.events = [];
  	this.eventSubject = new Subject<FrinineEvent>();
  	this.eventsSubject = new Subject<FrinineEvent[]>();
  }

  getEventByID(id) {
	 return this.db
		.collection('events')
		.doc(id)
		.valueChanges()
  }

  getEventByOrganiser(id): Observable<FrinineEvent[]> {
	return this.db
		.collection('events', ref => ref.where('organiserID', '==', id))
		.valueChanges({idField: 'id'});
  }

	getEventByOrganiserTest(id) {
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

  createEvent(e: FrinineEvent){
	return new Promise<any>((resolve, reject) => {
		this.db
			.collection('events')
			.add(e)
			.then(response => { console.log(response); }, error => reject(error));
	});
  }

  updateEvent(updates, id) {
	return this.db
		.collection('events')
		.doc(id)
		.update(updates);
  }


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
