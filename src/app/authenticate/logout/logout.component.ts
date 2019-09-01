import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/service/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthorizeService,private router:Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
