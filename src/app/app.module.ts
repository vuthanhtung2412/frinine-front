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
import { UserComponent } from './pages/user/user.component';
import { EventService } from './core/event.service';
import { EventComponent } from './pages/event/event.component';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AdminLayoutModule} from './admin-layout/admin-layout.module';


@NgModule({
	declarations: [
		AppComponent,
		EventComponent,
		UserComponent,
	],
	imports: [
		// written modules  
		AuthenticationModule,
		HomepageModule,
		AdminLayoutModule,

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
