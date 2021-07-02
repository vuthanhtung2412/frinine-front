import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserComponent } from './pages/user/user.component';
import { EventComponent } from './pages/event/event.component';
import { RegisterComponent} from './authentication/register/register.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {DiscoverComponent} from './pages/discover/discover.component';
import {CreateEventsComponent} from './pages/create-events/create-events.component';
import {StatsComponent} from './pages/homepage/stats/stats.component';

const routes: Routes = [
	{ path: 'chart', component: StatsComponent},
	{ path : '', redirectTo: '/authentication', pathMatch: 'full'},
	{ path: 'registration', component: RegisterComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'authentication', component: AuthenticationComponent},
	{ path: 'user/:id', component: UserComponent },
	{
		path:'menu',
		component: AdminLayoutComponent,
		children:[
			{ path:'discover', component: DiscoverComponent},
			{ path: 'homepage/:id', component: HomepageComponent},
			{ path: 'add-event', component: CreateEventsComponent},
			{ path: 'event/:id/:isAuthor', component: EventComponent },
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)], // put the array of routes above in action
	exports: [RouterModule]
})
export class AppRoutingModule {
}
