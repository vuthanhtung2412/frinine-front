import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { MockUsersDb } from '../interfaces/mock-users';
import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userSubject: Subject<User>;
  constructor(
		private http: HttpClient,
		private db: AngularFirestore,
  ){
      this.userSubject = new Subject<User>();
  }

  getUserByID(id): Observable<any>{ // return the user by ID from the mock database
	// const user = MockUsersDb.find(u => u.id ===id)!;
	// return of(user);
		return this.db
			.collection('users')
			.doc(id)
			.valueChanges();
  }
  getUserByIDTest(id){
      this.db
          .collection('users')
          .doc(id)
          .valueChanges().subscribe(
          (user) => {
              this.userSubject.next(user);
          },
          (error) => {
              console.error(error);
          }
      );
  }


  /*getUserDoc(id) {
        return this.angularFirestore
            .collection('user-collection')
            .doc(id)
            .valueChanges()
    }
   */
}
