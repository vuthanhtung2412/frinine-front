import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents =[
  MatButtonModule
]

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
    MatMenuModule
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
    MatMenuModule
  ]
})
export class MaterialModule { }
