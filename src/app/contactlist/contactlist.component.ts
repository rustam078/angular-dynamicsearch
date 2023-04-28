import { SearchReport } from './../search-report';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements AfterViewInit {
  selected = '';
  selected1 = '';
  selected2 = '';

  searchReport:SearchReport =new SearchReport();
  displayedColumns: string[] = ['id','ssn', 'name', 'planname', 'planstatus','gender'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.getplanname();
    this.getplanstatus();
    this.getEmployeeList();
  }

  plannames:string[];
  planstatuss:string[];
  constructor(private contactService:ContactService, private router:Router) {

  }
  getplanname(){
    this.contactService.getplanname().subscribe(
      data=>{
        this.plannames = data as []; 
      }
   
    );
  }

  getplanstatus(){
    this.contactService.getplanstatus().subscribe(
      data=>{
        this.planstatuss = data as [];
      }
    );
  }

  getEmployeeList() {
    this.contactService.getEmployeeList(this.searchReport).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  // getexcelreport(){
  //  this.contactService.getexcelreport();
  // }

  // getpdfreport(){
  // this.contactService.getpdfreport();
  // }

  exportToExcel() {
    this.contactService.getExcel().subscribe(data => {
      let file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  exportToPdf() {
    this.contactService.getPdf().subscribe(data => {
      let file = new Blob([data], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });

}

}

