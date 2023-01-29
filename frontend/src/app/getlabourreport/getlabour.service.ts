//service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabourData } from 'labourData.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetlabourService {
  public url = 'http://localhost:3000/';
  private labourData: LabourData[]=[];
  private labourDataUpdated = new Subject<LabourData[]>();

  constructor(private http: HttpClient) {}

  getLaborData(id: string) {
    return this.http.get<{data: any}>(this.url + '/getlabour/' + id)
    .pipe(map((laborD)=>{
      return laborD.data.map(labour=>{
        return{
          id: labour._id,
          name: labour.name,
          skilled:labour.skilled,
          unskilled:labour.unskilled,
          workDone:labour.workDone
        };
      });
    })
    )
  }
}
