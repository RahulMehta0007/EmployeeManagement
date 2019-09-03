import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Employee } from 'src/app/model/Employee.model';
import { DataService } from 'src/app/service/data-service.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createForm: FormGroup;
  successMessage:string;
  constructor(private dataService:DataService,private toasterService:NotificationService,private route:Router) { }

  ngOnInit() {
    this.formCreation();
  }

  onSubmit()
  {

    let name:string=this.createForm.controls.name.value;
    let designation:string=this.createForm.controls.designation.value;
    let salary:number=this.createForm.controls.salary.value;
    var empObj:Employee={emp_id:0,name:name,designation:designation,salary:salary};
    this.dataService.createEmployee(empObj).subscribe(
      (empId:number)=>{this.toasterService.createMsg(empId);}
   
    );
    this.route.navigate(['/']);

  }

  formCreation()
  {
    this.createForm = new FormGroup(
      {
        'name': new FormControl(null,Validators.required),
        'designation': new FormControl(null,Validators.required),
        'salary': new FormControl(null,Validators.required)
      }

    );

  }

}
