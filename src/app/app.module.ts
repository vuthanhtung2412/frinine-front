import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { HttpClientModule, HttpClient} from '@angular/common/http';

//Firebase module
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";



//written modules components and services
import { EventService } from './app-service/event.service';
import { AuthService } from './app-service/auth.service';
import { UserService } from './app-service/user.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AdminLayoutModule} from './admin-layout/admin-layout.module';
import { EventModule} from './pages/event/event.module';
import { PaymentComponent } from './pages/payment/payment.component';


let paypal;

let ng;

@NgModule({
	declarations: [
		AppComponent,
		PaymentComponent,
	],
	imports: [

		// written modules  
		AuthenticationModule,
		HomepageModule,
		AdminLayoutModule,
		EventModule,

		// Dependencies modules 
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,

		//Firebase module
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule
	],
	providers: [AuthService, UserService, EventService],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
