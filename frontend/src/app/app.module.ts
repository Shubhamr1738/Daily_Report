import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyReportComponent } from './daily-report/daily-report.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import{TestingService} from './services/testing.service'
import { HttpClientModule } from '@angular/common/http';
import { TestingtempComponent } from './testingtemp/testingtemp.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetlabourreportComponent } from './getlabourreport/getlabourreport.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyReportComponent,
    TestingtempComponent,
    LoginComponent,
    SignupComponent,
    GetlabourreportComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule

    
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
