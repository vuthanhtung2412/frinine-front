import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { User } from '../interfaces/user';
import { UserService} from '../app-service/user.service';
import { AuthService} from '../app-service/auth.service';
import { DebugService} from '../app-service/debug.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showSubmenu = false;
  id: number;
  // user : User ;
  showFiller = false;

  constructor(
		private router: Router,
		// private route: ActivatedRoute,
		// private userService: UserService
		private authService: AuthService,
		private debugService: DebugService
  ) { }

  ngOnInit(): void {
	// this.id = Number(this.route.snapshot.paramMap.get('id'));
	// this.userService.getUserByID(this.id).subscribe(user => this.user = user)
  }

  toDiscover(){
  	this.router.navigate(['menu/discover'])
  }

  toPayment(){
    this.router.navigate(['menu/payment/']).then(r => {})
  }

  toDashboard(){
	this.authService.auth.currentUser
		.then(u => this.router.navigate(['menu/homepage/' + u.uid]));
  }
  toSell(){
		this.authService.auth.currentUser
			.then(u => this.router.navigate(['menu/sell']));
  }
  toUser(){
      this.authService.auth.currentUser
          .then(u => this.router.navigate(['menu/user']));
  }

  logout(){
    this.authService.logOut()
    this.router.navigate(['']).then(r => {})
  }
}
