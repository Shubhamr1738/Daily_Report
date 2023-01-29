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
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { GetalldataService } from './admin/getalldata.service';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { GetlabourreportComponent } from './getlabourreport/getlabourreport.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyReportComponent,
    TestingtempComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
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
    MatCardModule,
    MatTableModule,
    CommonModule


  ],
  providers: [TestingService,GetalldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
