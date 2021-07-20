import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable , of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
		private http: HttpClient,
		private db: AngularFirestore,
  ){
  }

  getUserByID(id): Observable<any>{ // return the user by ID from the mock database
	// const user = MockUsersDb.find(u => u.id ===id)!;
	// return of(user);
		return this.db
			.collection('users')
			.doc(id)
			.valueChanges();
  }


  /*getUserDoc(id) {
        return this.angularFirestore
            .collection('user-collection')
            .doc(id)
            .valueChanges()
    }
   */
}
