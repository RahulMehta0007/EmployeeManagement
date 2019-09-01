import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }

  login(name: string, password: string): boolean {
    if (name == 'rahul' && password == 'mehta') {
      sessionStorage.setItem('user', 'rahul');
      return true;
    }
    else
      return false;
  }

  logout() {
    sessionStorage.removeItem('user');
  }

  checkLogin():boolean
  {
    return ( sessionStorage.getItem('user')!==null)
  }



}
