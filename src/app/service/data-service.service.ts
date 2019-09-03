import { Injectable } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

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
const headers=new HttpHeaders({Authorization:'Basic '+'cmFodWw6bWVodGE='});  
return this.http.get<Employee[]>(this.env.GET_EMPLOYEES_URL,{headers});
}

createEmployee(employee:Employee):Observable<any>
{ const headers=new HttpHeaders({Authorization:'Basic '+'cmFodWw6bWVodGE='});
  return  this.http.post(this.env.POST_EMPLOYEE_URL,employee,{headers});
}

updateEmployee(emp:Employee):Observable<any>
{ const headers=new HttpHeaders({Authorization:'Basic '+'cmFodWw6bWVodGE='});
  return this.http.put<Employee>(this.env.UPDATE_EMPLOYEE_URL,emp,{headers});
}

deleteEmployee(emp:Employee):Observable<any>
{ 
  const httpOptions = {  
  headers: new HttpHeaders({Authorization:'Basic '+'cmFodWw6bWVodGE='}), body: emp};
  return this.http.delete(this.env.DELETE_EMPLOYEE_URL,httpOptions);
}




}
