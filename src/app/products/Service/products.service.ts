import { enviromentnt } from './../../Environment/environment/environment.component';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.GetAll();
    this.GetAllCatgories();
  }
  GetAll() {
    return this.http.get(enviromentnt.BaseApi + 'products/');
  }
  GetAllCatgories() {
    return this.http.get(enviromentnt.BaseApi + 'products/categories/');
  }
  GetCatgory(event: any) {
    return this.http.get(enviromentnt.BaseApi + 'products/category/' + event);
  }
  GetCatgoryByID(id: any) {
    return this.http.get(enviromentnt.BaseApi + 'products/' + id);
  }
  createNewCart(model: any) {
    return this.http.post(enviromentnt.BaseApi + 'carts', model);
  }
}
