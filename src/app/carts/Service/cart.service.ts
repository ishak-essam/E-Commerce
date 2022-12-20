import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromentnt } from 'src/app/Environment/environment/environment.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  createNewCart(model: any) {
    return this.http.post(enviromentnt.BaseApi + 'carts', model);
  }
}
