import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/service/authguard.service';
import { AuthorizeService } from 'src/app/service/authorize.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthorizeService,private router:Router) { }
  user:string;
  pwd:string;
  invalidLogin:boolean;
  loginForm:FormGroup;
  ngOnInit() {
    this.createLoginForm();
  }

  onLogin()
  { 
    this.user=this.loginForm.controls.user.value;  
    this.pwd=this.loginForm.controls.pwd.value;
    console.log(this.loginForm);
    console.log(this.user,this.pwd);
    if(this.authService.login(this.user,this.pwd))
    {
      this.router.navigate(['']);
      this.invalidLogin=false;
    }
    else
    {
    this.invalidLogin=true;
    
    
    }
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
