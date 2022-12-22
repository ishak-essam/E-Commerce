import { CartService } from './../../Service/cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.GetCartProduct();
    this.GetPriceTotal();
  }
  constructor(private service: CartService) {}
  CartProdcut: any[] = [];
  TotalPrice: any = 0;
  confirmed: boolean = false;
  GetCartProduct() {
    if (
      `cart ${ JSON.parse(localStorage.getItem('UserLast')!).id}` in localStorage
    ) {
      this.CartProdcut = JSON.parse(localStorage.getItem(`cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`)!);
    }
  }
  GetPriceTotal() {
    this.TotalPrice = 0;
    for (let index in this.CartProdcut) {
      this.TotalPrice +=
        this.CartProdcut[index].item.price * this.CartProdcut[index].quantity;
    }
  }
  minsquantity(quant: number) {
    this.CartProdcut[quant].quantity--;
    localStorage.setItem(`cart ${ JSON.parse(localStorage.getItem('UserLast')!).id}`, JSON.stringify(this.CartProdcut));
    this.GetPriceTotal();
  }
  PlusQuantity(quant: number) {
    this.CartProdcut[quant].quantity++;
    localStorage.setItem(`cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`, JSON.stringify(this.CartProdcut));
    this.GetPriceTotal();
  }
  detect() {
    localStorage.setItem(`cart ${ JSON.parse(localStorage.getItem('UserLast')!).id}`, JSON.stringify(this.CartProdcut));
    this.GetPriceTotal();
  }
  DeleteItem(index: any) {
    this.CartProdcut.splice(index, 1);
    localStorage.setItem(`cart ${ JSON.parse(localStorage.getItem('UserLast')!).id}`, JSON.stringify(this.CartProdcut));
    this.GetPriceTotal();
  }
  Clear() {
    this.CartProdcut = [];
    localStorage.setItem(`cart ${ JSON.parse(localStorage.getItem('UserLast')!).id}`, JSON.stringify(this.CartProdcut));
    this.GetPriceTotal();
    this.TotalPrice = 0;
  }
  AddCartToUser() {
    let products = this.CartProdcut.map((ele) => {
      return { productID: ele.item.id, quantity: ele.quantity };
    });
    let model = {
      userId:  JSON.parse(localStorage.getItem('UserLast')!).id,
      data: new Date(),
      product: products,
    };
    this.confirmed = true;
    this.service.createNewCart(model).subscribe((ele) => {});
  }
}
