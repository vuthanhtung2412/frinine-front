import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    userSubject: Subject<any>;
  constructor(
		private http: HttpClient,
		private db: AngularFirestore,
  ){
      this.userSubject = new Subject();
  }

  getUserByID(id){
      this.db
          .collection('users')
          .doc(id)
          .valueChanges().subscribe(
          (user: User) => {
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
