import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(user: User) { }

  //LOGIN
  login( username, password){
    if (username =='tung' && password == 'tung'){
      return true 
    } 
  }
  //REGISTRATION

  //RESET PASSWORDS
}
