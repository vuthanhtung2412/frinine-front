import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { MockUsersDb } from '../interfaces/mock-users';

// Firebase's imports
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	// user: User
	// The stupid fault which take me a week to figure out
	private db: AngularFirestore,
	public auth: AngularFireAuth,
	private router: Router
  ) {
  	// this.auth.signOut()
  	// Realtime authentication listener
  	this.auth.onAuthStateChanged(frinineUser => {
  		if (frinineUser){
		    console.info(frinineUser.uid);
	    }else{
  			console.warn('not logged in ');
	    }
	});
  }

	// React to change of auth state


  // LOGIN
  login( email, pass){
  	let uid = '1';
  	const promise = this.auth.signInWithEmailAndPassword(email, pass).then(cred => {
  		uid = cred.user.uid;
	   this.router.navigate(['menu/homepage/' + uid]).then();
	});
  	promise.catch( e => console.log(e.message)); // this doesn't log the info of the
  }

  signUp( email, pass, user: User ){
  	const promise = this.auth.createUserWithEmailAndPassword(email, pass)
	    .then(cred => {
		    this.router.navigate(['menu/homepage/' + cred.user.uid]).then();
	    	return this.db.collection('users').doc(cred.user.uid).set(user);
	})
	    .then(() => {});

  	promise.catch(e => console.log(e.message));
  	return false;
  }

  logOut(){
  	this.auth.signOut();
  }

}


