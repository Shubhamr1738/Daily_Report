import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "./login.service"
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:any
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  loginUser() {
    this.loginService.loginUserData(this.loginForm.value)
    .pipe(
      map(res => {
          console.log(res);
          // do something with successful response
      }),
      catchError(error => {
          // do something with error
          return throwError(error.error.message);
      })
    ).subscribe();
  }
}
