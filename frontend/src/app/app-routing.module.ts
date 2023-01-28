import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { LoginComponent } from './login/login.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'forms',
    component:DailyReportComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
<<<<<<< HEAD
    path:'admin',
    component:AdminComponent,
    pathMatch:'full'
=======
    path:'getlabour/:id',
    component:GetlabourreportComponent,
>>>>>>> d4aafe047d5db4849450dc8ff8a81f2ab4d70e22
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
