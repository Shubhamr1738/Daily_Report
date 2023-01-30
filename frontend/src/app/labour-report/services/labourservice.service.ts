import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabourData } from '../model/LabourData';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LabourserviceService {
  private url = 'http://localhost:3000/addlabour/';
  private labourData: LabourData[] = [];
  private labourDataUpdated = new Subject<LabourData[]>();

  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute) { }

  form: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    skilled: [''],
    unskilled: [''],
    workDone: ['']
    });
    
    addLabourReports(labourData: LabourData) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const id = this.route.snapshot.paramMap.get('id');
    this.form.patchValue({
    id: id,
    name: labourData.name,
    skilled: labourData.skilled,
    unskilled: labourData.unskilled,
    workDone: labourData.workDone
    });
    return this.http.post(`${this.url}${"63d2cc152cf69cd8c0147924"}`, this.form.value, { headers });
    }

    getallLabours(): Observable<any>{
        return this.http.get('http://localhost:3000/getlabour/63d2cc152cf69cd8c0147924/')
      }
    }



