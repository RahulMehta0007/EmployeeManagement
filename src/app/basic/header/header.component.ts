import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthorizeService) { }

  ngOnInit() {
      }

}
