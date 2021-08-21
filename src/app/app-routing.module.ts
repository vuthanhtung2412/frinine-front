import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {CreateEventsComponent} from './pages/event/create-events/create-events.component';
import {StatsComponent} from './pages/homepage/stats/stats.component';
import {EventManagementComponent} from './pages/event/event-management/event-management.component';
import {SellComponent} from './pages/sell/sell.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {UserComponent} from "./pages/user/user.component";
import {ChangePwdComponent} from "./pages/user/change-pwd/change-pwd.component";

const routes: Routes = [
	{ path: 'chart', component: StatsComponent},
	{ path : '', redirectTo: '/authentication', pathMatch: 'full'},
	{ path: 'authentication', component: AuthenticationComponent},
	{
		path: 'menu',
		component: AdminLayoutComponent,
		children:[
			{ path: 'payment', component: PaymentComponent},
			{ path: 'homepage/:id', component: HomepageComponent},
			{ path: 'add-event', component: CreateEventsComponent},
			{ path: 'event-management/:id', component: EventManagementComponent},
			{ path: 'sell', component: SellComponent},
			{ path: 'user', component: UserComponent},
			{ path: 'change-pwd', component: ChangePwdComponent},
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)], // put the array of routes above in action
	exports: [RouterModule]
})
export class AppRoutingModule {
}
