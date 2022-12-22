import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Ends, PasswordKeyWord } from '../emailend';
import { SpaceName } from '../Spaces';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class REGISTERComponent implements OnInit {
  ngOnInit(): void {}
  EmailValid: boolean = false;
  UsernameValid: boolean = false;
  AddUser: any = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '1-570-236-7033',
  };
  constructor(private RegService: ServiceService, private router: Router) {}
  form2: FormGroup = new FormGroup({
    UserName: new FormControl('', [Validators.required, SpaceName.nospace]),
    Email: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      SpaceName.nospace,
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
  get UserName() {
    return this.form2.get('UserName');
  }
  item: any[] = JSON.parse(localStorage.getItem('users')!);
  clciked() {
    this.UsernameValid == false;
    this.EmailValid == false;
    console.clear();

    for (let i = 0; i <= Object.keys(this.item).length; i++) {
      if (this.item[i]?.email == this.emails?.value) {
        this.EmailValid = true;
        console.log(this.EmailValid);
        break;
      } else {
        this.EmailValid = false;
      }
      if (this.item[i]?.username == this.UserName?.value) {
        this.UsernameValid = true;
        console.log(this.UsernameValid);
        break;
      } else {
        this.EmailValid = false;
      }
    }
    console.log(this.EmailValid);
    console.log(this.UsernameValid);

    if (this.EmailValid == false && this.UsernameValid == false) {
      this.AddUser = {
        id: Object.keys(this.item).length,
        email: this.emails?.value,
        username: this.UserName?.value,
        password: this.Passwords?.value,
        name: {
          firstname: '',
          lastname: '',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      };
      this.RegService.boolLogin = true;
      localStorage.setItem('UserLast', JSON.stringify(this.AddUser));
      this.router.navigate(['products']);
      this.item.push(this.AddUser);
      localStorage.setItem('users', JSON.stringify(this.item));
    }
  }
}
