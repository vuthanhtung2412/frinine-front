import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {AngularFireDatabase} from '@angular/fire/database'
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

    MockUsersDb: User[]=[
        {
            id : 1,
            name : 'tung',
            gmail : 'tung2412@gmail.com',
            password: 'tung'
        },
        {
            id : 2,
            name : 'hau',
            gmail : 'hau@gmail.com',
            password: 'hau'
        },
        {
            id : 3,
            name : 'minh',
            gmail : 'minh@gmail.com',
            password: 'minh'
        },
        {
            id : 4,
            name : 'hoang',
            gmail : 'hoang@gmail.com',
            password: 'hoang'
        },
        {
            id : 5,
            name : 'tom',
            gmail : 'tom@gmail.com',
            password: 'tom'
        },
    ]
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
}