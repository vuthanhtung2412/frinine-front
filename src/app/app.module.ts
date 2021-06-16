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

@NgModule({
	declarations: [
		AppComponent,
		//LoginComponent,
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
	providers: [HttpClientModule],
	bootstrap: [AppComponent]
})
export class AppModule {
}
