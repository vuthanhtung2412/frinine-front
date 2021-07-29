import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor(
		private auth: AngularFireAuth
  ) { }

  printAuth(){
	this.auth.currentUser.then(user => {
		console.log(user.email);
		console.log(user.uid);
	});
  }
}
