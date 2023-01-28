import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteData } from '../daily-report/models/SiteData';
import { LabourReport } from '../daily-report/models/LabourReport';
import { CementReport } from '../daily-report/models/CementReport';


@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private  URL = 'http://localhost:3000/addlabour';


  constructor(private http:HttpClient) { }


  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/x-www-form-urlencoded'})
    };
    return this.http.post(this.URL,
    {
      'name' : 'rohit',
      'site' : "pune",
      'day':"today",
      "date":"12-12-12"
  })
  }


  AddItems(sites:SiteData): Observable<Object> {
    console.log('Request is sent!');
    console.log(sites)
    return this.http.post(`${this.URL}`,
    sites)
  }
  SaveLabour(lr:LabourReport): Observable<Object> {
    console.log('Request is sent!');
    console.log("in service",lr)
    return this.http.post(`${this.URL}/63d2c66fa3baf84a8ba2ce08`,lr);
  }
  SaveCement(cr:CementReport): Observable<Object> {
    console.log('Request is sent!');
    console.log(cr)
    return this.http.post(`${this.URL}`,
    cr)
  }

  // public addUser(user:any){
  //   return this.http.post(`${baseUrl}/user/`,user);
  //     }
}
