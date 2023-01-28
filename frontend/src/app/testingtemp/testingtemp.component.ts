import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TestingService } from '../services/testing.service';
@Component({
  selector: 'app-testingtemp',
  templateUrl: './testingtemp.component.html',
  styleUrls: ['./testingtemp.component.css']
})
export class TestingtempComponent implements OnInit {
  Report = this.fb.group({
    Site: ['', Validators.required],
    Day: [''],
    Date: [''],
    labourReport: this.fb.group({
      Name: [''],
      Skill: [''],
      Unskill: [''],
      Workdone: [''],
    }),
    cementReport: this.fb.group({
      OpeningBal: [''],
      CementReceived: [''],
      TotalStock: [''],
      ConsumptionDetails: [''],
      ClosingBalance: ['']
    }),
    materialReport: this.fb.group({
      Material: [''],
      SupplierName: [''],
      Quantity: [''],
      ChallanNo: [''],
      Time: ['']
    }),
    Remark: this.fb.group({
      remark: [''],
      
    })
  });
constructor(private fb: FormBuilder,private test:TestingService) { }
ngOnInit() {
  }
  addLabour(){
    console.log(this.Report.value.labourReport)


  }
  callingFunction() {
    console.log(this.Report.value);
   }
}
