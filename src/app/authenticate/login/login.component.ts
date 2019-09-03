import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/service/authguard.service';
import { AuthorizeService } from 'src/app/service/authorize.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { catchError } from 'rxjs/internal/operators/catchError';
import { error } from '@angular/compiler/src/util';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthorizeService,private router:Router,private toasterService: NotificationService) { }
  user:string;
  pwd:string;
  loginForm:FormGroup;
  ngOnInit() {
    this.createLoginForm();
  }

  onLogin()
  { 
    this.user=this.loginForm.controls.user.value;  
    this.pwd=this.loginForm.controls.pwd.value;
    this.authService.login(this.user,this.pwd).subscribe((data)=>{
      this.router.navigate(['']);
    },error=>{this.router.navigate(['']);this.toasterService.errorMsg();})
    
    
  }


  createLoginForm()
  {
    this.loginForm = new FormGroup(
      {
        'user': new FormControl(null,Validators.required),
        'pwd': new FormControl(null,Validators.required),
      }

    );

  }




}
