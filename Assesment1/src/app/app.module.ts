import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBar } from 'src/navigationbar/navigationBar.component';
import { EmployeeForm } from 'src/templateForm/templateForm.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EmployeeListComponent } from 'src/Employeelist/EmployeeList.component';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeDirective } from 'src/directive/employeedirective.component';

@NgModule({
  declarations: [
    AppComponent,NavBar,EmployeeForm,EmployeeListComponent
    ,EmployeeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
