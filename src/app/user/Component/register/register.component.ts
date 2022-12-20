import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Ends, PasswordKeyWord } from '../emailend';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class REGISTERComponent {
  form2: FormGroup = new FormGroup({
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
    return this.form2.get('Email');
  }
  get Passwords() {
    return this.form2.get('Password');
  }
}
