import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {AngularFireDatabase} from '@angular/fire/database';
import { MockUsersDb } from '../interfaces/mock-users'
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user : User ={
        id : 1 ,
        name :'tung',
        gmail:"tung@gmail.com",
        password: 'tung2412'
    }

  constructor(
      private http: HttpClient,
      db: AngularFireDatabase
  ){ 

  } 

  //to be replace with an user get form firestore
  getUserById(id){
    return this.user;
  }

  getUserByID(id): Observable<User>{
    const event = MockUsersDb.find(e => e.id ===id)!;
    return of(event);
  }
}