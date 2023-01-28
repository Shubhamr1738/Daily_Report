import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SignupService} from "./signup.service"
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any
  constructor(private formBuilder: FormBuilder, private signupService: SignupService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      site: ['', Validators.required],
      email: ['', Validators.required]
    });
    
  }

  signupUser() {
    console.log(this.signupForm.value)
    this.signupService.loginUserData(this.signupForm.value)
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
