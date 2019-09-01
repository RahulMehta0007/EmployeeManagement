import { Injectable } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  env=environment;
  employeeBehaviourSubject=new BehaviorSubject<Employee>({emp_id:0,name:'Default Name',designation:'Default Designation',salary:10000});
  dataEmployee:Employee;
  constructor(private http:HttpClient) { }

getEmployees():Observable<any>
{
return this.http.get<Employee[]>(this.env.GET_EMPLOYEES_URL);
}

createEmployee(employee:Employee):Observable<any>
{ 
  return  this.http.post(this.env.POST_EMPLOYEE_URL,employee);
}

updateEmployee(emp:Employee):Observable<any>
{ console.log('Emp value',emp);
  return this.http.put<Employee>(this.env.UPDATE_EMPLOYEE_URL,emp);
}

deleteEmployee(emp:Employee):Observable<any>
{ 
  const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: emp};
  return this.http.delete(this.env.DELETE_EMPLOYEE_URL,httpOptions);
}
}
