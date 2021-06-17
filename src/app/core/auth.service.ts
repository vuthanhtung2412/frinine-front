import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
	]
  constructor(
  	// user: User
	// The stupid fault which take me a week to figure out
  ) { }

  // LOGIN
  // tslint:disable-next-line:typedef
  login( username, password){
	// tslint:disable-next-line:triple-equals
	return username == 'tung' && password == 'tung'
  }

  signUp( username, password){
  	return username == 'tung' && password == 'tung'
  }
  // RESET PASSWORDS
}
