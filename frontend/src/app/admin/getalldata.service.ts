import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetalldataService {

  constructor(private http: HttpClient) { }
getusers(): Observable<any>{
  return this.http.get('http://localhost:3000/user/getalluser')
}
}