import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data-service.service';
import { NotificationService } from 'src/app/service/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private toasterService: NotificationService,private route:Router) { }
  employee: Employee;
  updateForm: FormGroup;
  mySubscription: Subscription;

  ngOnInit() {

    this.createForm();
    this.dataService.employeeBehaviourSubject.subscribe(
      (data) => { this.employee = data; }
    );

    this.updateForm.patchValue({ name: this.employee.name, empId: this.employee.emp_id, salary: this.employee.salary, designation: this.employee.designation });

  }




  createForm() {
    this.updateForm = new FormGroup({
      'empId': new FormControl({ value: '', disabled: true }, Validators.required),
      'name': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'salary': new FormControl(null, Validators.required)

    });

  }

  ngOnDestroy() {

  }


  updateEmployee() {
    let empObj = {
      emp_id: this.updateForm.controls.empId.value, name: this.updateForm.controls.name.value,
      salary: this.updateForm.controls.salary.value, designation: this.updateForm.controls.designation.value
    }

    this.dataService.updateEmployee(empObj).subscribe((emp:Employee) => { this.toasterService.updateMsg(emp.emp_id)});
    this.route.navigate(['/']);
  }
  deleteEmployee() {
    this.dataService.deleteEmployee(this.employee).subscribe((emp:Employee) => { this.toasterService.deleteMsg(emp.emp_id) });
    this.route.navigate(['/']);
  }



}
