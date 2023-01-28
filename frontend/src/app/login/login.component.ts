import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private http: HttpClient, private router: Router,private loginForm: FormGroup) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    // const loginData = this.loginForm.value;
    // this.http.post('http://localhost:3000/login', loginData)
    //   .subscribe(res => {
    //     if (res.message === 'login successfully') {
    //       this.router.navigate(['/home']);
    //     } else {
    //       console.log(res.message);
    //     }
    //   });
  }
}

  


