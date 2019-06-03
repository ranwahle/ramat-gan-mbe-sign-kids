import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthStatementComponent } from './health-statement/health-statement.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentContactDetailsComponent } from './parent-contact-details/parent-contact-details.component';
import { PhotographyApprovalComponent } from './photography-approval/photography-approval.component';
import { StudentEscortComponent } from './student-escort/student-escort.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HealthStatementComponent,
    StudentDetailsComponent,
    ParentContactDetailsComponent,
    PhotographyApprovalComponent,
    StudentEscortComponent

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
