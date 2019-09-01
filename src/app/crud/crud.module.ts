import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from 'src/app/crud/create-employee/create-employee.component';
import { ViewEmployeeComponent } from 'src/app/crud/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from 'src/app/crud/view-employee/update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CrudModule { }
