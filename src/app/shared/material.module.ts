import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

// INTERNATIONAL PHONE NUMBER PICKER
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';


const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatGridListModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatStepperModule,
	FlexLayoutModule,
	MatMenuModule,
	MatCheckboxModule,
	MatDialogModule,
	TextFieldModule,
	MatTabsModule,
	MatExpansionModule,
	NgxMatIntlTelInputModule,
	MatButtonToggleModule,
	MatTableModule,
	MatPaginatorModule,
	  MatSortModule,
	  MatChipsModule,
	  MatAutocompleteModule,

  ],
  exports: [
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatGridListModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatStepperModule,
	FlexLayoutModule,
	MatMenuModule,
	MatCheckboxModule,
	MatDialogModule,
	TextFieldModule,
	MatTabsModule,
	MatExpansionModule,
	NgxMatIntlTelInputModule,
	MatButtonToggleModule,
	MatTableModule,
	MatPaginatorModule,
	  MatSortModule,
	  MatChipsModule,
	  MatAutocompleteModule,
  ]
})
export class MaterialModule { }
