import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthorizeService } from 'src/app/service/authorize.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
  if(this.authService.checkLogin())
    return true;
     
    this.router.navigate(['/login']);
    return false;
  
  }

  constructor(private authService:AuthorizeService,private router:Router) { }
}
