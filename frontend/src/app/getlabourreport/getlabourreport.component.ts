import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LabourData } from 'labourData.model';
import { GetlabourService } from './getlabour.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-getlabourreport',
templateUrl: './getlabourreport.component.html',
styleUrls: ['./getlabourreport.component.css']
})
export class GetlabourreportComponent implements OnInit {
labourData:LabourData[];
private labourDataUpdated = new Subject<LabourData[]>();
id: string;
private labourSub:Subscription;
constructor(private getlabourService:GetlabourService,private route: ActivatedRoute) { }

ngOnInit(): void {

this.route.params.subscribe(params => {
this.id=params['id'];
});
this.getlabourService.getLaborData(this.id).subscribe((laborData) => {
  this.labourData=laborData;
  this.labourDataUpdated.next([...this.labourData]);
  });
}

}
