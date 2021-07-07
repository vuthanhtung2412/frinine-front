import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import { User } from '../interfaces/user';
import { UserService} from '../core/user.service';
import { AuthService} from '../core/auth.service';
import { DebugService} from '../core/debug.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  id : number
  //user : User ;
  showFiller = false;

  constructor(
      private router: Router,
      //private route: ActivatedRoute,
      //private userService: UserService
      private authService : AuthService,
      private debugService: DebugService
  ) { }

  ngOnInit(): void {
    //this.id = Number(this.route.snapshot.paramMap.get('id'));
    //this.userService.getUserByID(this.id).subscribe(user => this.user = user)
  }

  toDiscover(){
    this.router.navigate(['menu/discover'])
  }
  toDashboard(){
    this.authService.auth.currentUser
        .then(u => this.router.navigate(['menu/homepage/'+u.uid]))
  }

  logout(){
    this.authService.logOut()
    this.router.navigate([''])
  }

  printAuth(){
    this.debugService.printAuth()
  }
}