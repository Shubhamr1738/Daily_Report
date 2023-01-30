import { Component, OnInit } from '@angular/core';
import {LabourserviceService} from './services/labourservice.service'
import {LabourData} from './model/LabourData'

@Component({
  selector: 'app-labour-report',
  templateUrl: './labour-report.component.html',
  styleUrls: ['./labour-report.component.css']
})
export class LabourReportComponent implements OnInit {
  labourData: LabourData = {
    value: '',
    id: '',
    name: '',
    skilled: '',
    unskilled: '',
    workDone: ''
    };

  table:any
  dataSource:any
  
  displayedColumns: string[] = ['demo-Name', 'demo-Skill', 'demo-Unskill', 'demo-Workdone','demo-delete'];
    
    constructor(private labourDataService: LabourserviceService) { }
    clickedRows = new Set<any>();
    ngOnInit(): void {
      console.log(this.dataSource)
      this.labourDataService.getallLabours().subscribe(data => {

        console.log(data);
        this.dataSource=data.data;
      });
    }
    
    addLabourReports() {
    this.labourDataService.addLabourReports(this.labourData).subscribe(
    res => console.log(res),
    err => console.log(err)
    );
    this.labourData= {
      value: '',
      id: '',
      name: '',
      skilled: '',
      unskilled: '',
      workDone: ''
  };
    }
    }

