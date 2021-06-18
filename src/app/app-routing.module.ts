import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { RegisterComponent} from './authentication/register/register.component';


const routes: Routes = [
	{ path: '',   redirectTo: '/authentication', pathMatch: 'full' },
	{path: 'registration', component: RegisterComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'authentication', component: AuthenticationComponent},
	{ path: 'homepage', component: HomepageComponent},
	{ path: 'user/:id', component: UserComponent },
	{ path: 'event/:id', component: EventComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)], // put the array of routes above in action
	exports: [RouterModule]
})
export class AppRoutingModule {
}
