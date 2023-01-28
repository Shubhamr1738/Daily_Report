import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

const BACKEND_URL=http://localhost:3000/
@Injectable({
  providedIn: 'root'
})
export class GetlabourService {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  getLabourReports(id: string) {
    return this.http.get(`http://localhost:300/labour-report/${id}`);
}

}
