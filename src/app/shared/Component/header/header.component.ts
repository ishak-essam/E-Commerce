import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/user/Services/service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  UserName = JSON.parse(localStorage.getItem('UserLast')!).username;
  HeaderLogin: boolean = false;
  constructor(public service: ServiceService) {}

  clciked() {
    return localStorage.getItem('UserLast') ? true : false;
  }
  clcikedOut() {
    this.HeaderLogin = false;
    this.service.boolLogin = false;
    localStorage.removeItem('UserLast');
    return;
  }
}
