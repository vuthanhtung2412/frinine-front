import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//import { LoginComponent } from './authentication/login/login.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { AuthenticationModule } from './authentication/authentication.module';
import { HomepageModule } from './homepage/homepage.module';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EventComponent } from './event/event.component';
import {EventService} from './core/event.service';

@NgModule({
	declarations: [
		AppComponent,
		EventComponent
	],
	imports: [
		// written modules  
		AuthenticationModule,
		HomepageModule,
		// Dependencies modules 
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
	],
	providers: [AuthService, UserService,EventService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
