import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


export class User{
status:String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private dataService:DataService,private http:HttpClient) { }

  login(name: string, password: string) {
  
     /* if (this.dataService.validate(name,password)) {
      sessionStorage.setItem('user',name);
      return true;
    }
    else
      return false; */    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(name + ':' + password) });
      return this.http.get<User>(environment.VALIDATION_URL,{headers}).pipe(
       map(
         data => {
          console.log('Inside');
          sessionStorage.setItem('user',name);
          return data;
         }
       )
  
      );




  }

  logout() {
    sessionStorage.removeItem('user');
  }

  checkLogin():boolean
  {
    return ( sessionStorage.getItem('user')!==null)
  }



}
