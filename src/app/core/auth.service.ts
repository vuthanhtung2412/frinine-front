import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { MockUsersDb } from '../interfaces/mock-users';

//Firebase's imports
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user : User;

  constructor(
  	// user: User
	// The stupid fault which take me a week to figure out
    private db: AngularFirestore,
    private auth: AngularFireAuth
  ) {
  	this.auth.signOut()
  	// Realtime authentication listener
  	this.auth.onAuthStateChanged(frinineUser =>{
  		if(frinineUser){
  			console.log(frinineUser)
	    }else{
  			console.log('not logged in ');
	    }
    })
  }

	// React to change of auth state


  // LOGIN
  login( email, pass){
  	let user = null
  	const promise = this.auth.signInWithEmailAndPassword(email, pass).then(r => {});
  	promise.catch( e=> console.log(e.message)) // this doesn't log the info of the
	  console.log(this.auth)
	return true;
  }

  signUp( email, pass, name, surname, gender, dob, username){
  	const promise = this.auth.createUserWithEmailAndPassword(email, pass).then(cred => {
  		return this.db.collection('users').doc(cred.user.uid).set({
		    email: email,
		    name : name,
		    surname: surname,
		    gender: gender,
		    dob: dob,
		    username: username,
	    })
    }).then(() => {});
  	promise.catch(e => console.log(e.message))
  	return false;
  }

  logOut(){
  	this.auth.signOut()
  }
}


