import { LoginComponent } from './../Component/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromentnt } from 'src/app/Environment/environment/environment.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  boolLogin: boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.GetLogin();
  }
  ServiceName = '';
  GetLogin() {
    return this.http.get(enviromentnt.BaseApi + 'users/');
  }
}
