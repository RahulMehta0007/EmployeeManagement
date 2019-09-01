import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/model/Employee.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private dataService:DataService,private route:Router) { }
  employees:Employee[];
  ngOnInit() {
  
  this.dataService.getEmployees().subscribe(
    (data)=>{
      //console.log("Get Employees")
     // console.table(data);
      this.employees=data;
    }
    
  );
  }


  onUpdateDelete(emp:Employee)
  {
  this.dataService.employeeBehaviourSubject.next(emp);
  this.route.navigate(['update']);
 
  }

}
