import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTabLabel } from '@angular/material/tabs';
import { filter } from 'rxjs';
import { GetalldataService } from './getalldata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
 
export class AdminComponent implements OnInit {
  
  
  @ViewChild(MatTable, {static:false}) table: MatTable<any>;
  // displayedColumns: string[] = ['demo-firstName', 'demo-lastName', 'demo-email', 'demo-username','demo-password', 'demo-sites'];
  dataSource:any
  constructor(private dataService: GetalldataService) {}
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-password', 'demo-site'];

  
  
  ngOnInit() {
    this.dataService.getusers().subscribe(data => {

      console.log(data.data);
      this.dataSource=data.data;
    });
  }
  


  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}

