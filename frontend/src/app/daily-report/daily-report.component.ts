import { Component, OnInit } from '@angular/core';

import{SiteData} from './models/SiteData'
import{LabourReport} from './models/LabourReport'
import{CementReport} from './models/CementReport'
import{MaterialReport} from './models/MaterialReport'
import{Remarks} from './models/Remarks'
import { Observable } from 'rxjs';
import { TestingService } from '../services/testing.service';
@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})



export class DailyReportComponent implements OnInit { 
 
  sites=new SiteData()
  lr=new LabourReport()
  cr=new CementReport()
  mr=new MaterialReport()
  remarks=new Remarks()
  data:any;
  labourRow:any=[]
  // Lr:LabourReport[]=[{}]
  
 
  
  
  
  constructor(private test: TestingService) {
    
  }

  ngOnInit(): void {
    this.labourRow = [{
      name:'',
      skill:'',
      unskill:'',
      workdone:''
}]
  }
  saveSite(){
    console.log(this.sites)
    this.test.AddItems(this.sites).subscribe(
      (data:any)=>{
        //success
        console.log(data);

    },
    error=>console.log(error));
  }
  
  saveLabour(){
    console.log("Save Labour")
    console.log(this.labourRow)
    this.test.SaveLabour(this.labourRow).subscribe(
      (data:any)=>{
        //success
        console.log("Labours r saved")
        console.log(data);

    },
    error=>console.log(error));
  }
  cementReport(){
    console.log(this.cr)
    this.test.SaveCement(this.cr).subscribe(
      (data:any)=>{
        //success
        console.log("cement r saved")
        console.log(data);

    },
    error=>console.log(error));
  }
  materialReport(){
    console.log(this.mr)
  }
  saveremarks(){
    console.log(this.remarks)
  }
  submitForm(){
    this.data=[
      this.sites,
      this.lr,
      this.cr,
      this.mr,
    this.remarks
    ]
    console.log(this.data)

  }
  addRow() {
  
      let labourRow = {name: "", skill: "",unskill:"",workdone:""};
      this.labourRow.push(labourRow);
    
  }
  
 deleteRow(index:any) {
  this.labourRow.splice(index, 1);
 }
}
