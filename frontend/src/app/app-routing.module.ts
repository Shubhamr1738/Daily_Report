import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { LoginComponent } from './login/login.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GetlabourreportComponent } from './getlabourreport/getlabourreport.component';

const routes: Routes = [
  {
    path:'forms',
    component:DailyReportComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'getlabour/:id',
    component:GetlabourreportComponent,
  },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

