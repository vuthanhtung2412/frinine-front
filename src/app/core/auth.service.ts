import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { MockUsersDb } from '../interfaces/mock-users';
import

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	// user: User
	// The stupid fault which take me a week to figure out
  ) { }

  // LOGIN
  login( username, password){
	return username == 'tung' && password == 'tung'
  }

  signUp( username, password){
  	return username == 'tung' && password == 'tung'
  }
  // RESET PASSWORDS
}
