import {Injectable} from '@angular/core';
import {Event} from '../interfaces/event';
import {MockEventsDb} from '../interfaces/mock-events';
import {Observable, of} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
      private db : AngularFirestore
  ) {}

  getEventByID(id): Observable<any>{
    return this.db
        .collection('events')
        .doc(id)
        .valueChanges()
    //const event = MockEventsDb.find(e => e.id ===id)!;
    //return of(event);
  }

  getEventByOrganiser(id): Observable<any>{
    return this.db
        .collection('events',ref => ref.where('organiserID','==',id))
        .valueChanges({idField: 'id'})
    //const events = MockEventsDb.filter(e => e.organiserID === id)
    //return of(events)
  }

  deleteEvent(id){
    return this.db
        .collection("events")
        .doc(id)
        .delete();
  }

  createEvent(e: Event){
    return new Promise<any>((resolve, reject) =>{
      this.db
          .collection("events")
          .add(e)
          .then(response => { console.log(response) },error => reject(error));
    });
  }

  getEvents(): Observable<Event[]>{
      return of(MockEventsDb)
  }

  updateEvent(updates, id) {
    return this.db
        .collection("events")
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
