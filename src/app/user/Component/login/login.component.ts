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
  clciked(mails: any, passwords: any) {
    this.service.GetLogin().subscribe((ele: any) => {
      this.item = ele;
      console.log(ele);
      for (let i = 0; i <= Object.keys(ele).length; i++) {
        if (this.item[i].email == mails) {
          this.emailerr = true;
          if (this.item[i].password == passwords) {
            this.router.navigate(['products']);
            this.LoginForm = true;
            this.service.boolLogin = this.LoginForm;
            this.service.usernameserive = this.item[i].username;
            this.passerr = true;
          } else if (this.item[i].password != passwords) {
            this.passerr = false;
          }
        }
      }
    });
    setTimeout(() => {
      this.emailerr = false;
    }, 1000);
  }
}
