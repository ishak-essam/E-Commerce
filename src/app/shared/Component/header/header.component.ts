import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/user/Services/service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.HeadName = JSON.parse(localStorage.getItem('UserLast')!).username;
  }
  HeaderLogin: boolean = false;
  HeadName = JSON.parse(localStorage.getItem('UserLast')!).username;

  constructor(public service: ServiceService) {}

  clciked() {
    return localStorage.getItem('UserLast') ? true : false;
  }
  clcikedOut() {
    this.HeaderLogin = false;
    this.service.boolLogin = false;
    return localStorage.removeItem('UserLast');
  }
}
