import { User } from './../../../../../../HttpBegin/TDF/src/app/trying/user';
import { LoginComponent } from './../../../user/Component/login/login.component';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/user/Services/service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  UserName = this.service.usernameserive;
  HeaderLogin: boolean = false;
  constructor(public service: ServiceService) {}

  clciked() {
  this.UserName = this.service.usernameserive;
    return (this.HeaderLogin = this.service.boolLogin);
  }
  clcikedOut() {
    this.HeaderLogin = false;
    this.service.boolLogin = false;
    return;
  }
}
