import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Ends, PasswordKeyWord } from '../emailend';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  item: any = [];
  index: number = 0;
  login: boolean = false;
  LastUser: [] = [];
  LoginForm: boolean = false;
  passerr: boolean = true;
  emailerr: boolean = true;
  constructor(private service: ServiceService, private router: Router) {}
  form: FormGroup = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      Ends.EmailEnds,
    ]),
    Password: new FormControl('', [
      Validators.required,
      PasswordKeyWord.PasswordKeyWords,
    ]),
  });

  get emails() {
    return this.form.get('Email');
  }
  get Passwords() {
    return this.form.get('Password');
  }
  clciked() {
    this.item = JSON.parse(localStorage.getItem('users')!);
    for (let i = 0; i <= Object.keys(this.item).length; i++) {
      if (this.emails?.value == this.item[i]?.email) {
        if (this.Passwords?.value == this.item[i]?.password) {
          this.login = true;
          this.service.ServiceName = this.item[i]?.username;
          console.log(this.service.ServiceName);
          this.index = i;
          break;
        }
      }
    }
    if (this.login == true) {
      this.LoginForm = true;
      this.service.boolLogin = this.LoginForm;
      this.LastUser = this.item[this.index];
      localStorage.setItem('UserLast', JSON.stringify(this.LastUser));
      this.passerr = true;
      this.router.navigate(['products']);
    } else {
      this.emailerr = false;
      this.passerr = false;
    }
  }
}
