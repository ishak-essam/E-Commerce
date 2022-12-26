import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Service/products.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  Id: any;
  exit: boolean = false;
  qun: boolean = false;
  loading: boolean = false;
  DataID: any = [];
  LocalLastUser = JSON.parse(localStorage.getItem('UserLast')!);
  CartProdcut: any[] =
    JSON.parse(localStorage.getItem(`cart ${this.LocalLastUser.id}`)!) || [];
  amount: number = 0;
  ProductItem: any = { item: this.DataID, quantity: this.amount };
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.Id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.GetItem();
  }
  GetItem() {
    this.loading = true;
    this.service.GetCatgoryByID(this.Id).subscribe((ele: any) => {
      this.DataID = ele;
      if (`cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`) {
        for (let val in Object.keys(this.CartProdcut)) {
          if (this.CartProdcut[val]?.item.id == this.DataID.id) {
            this.amount = this.CartProdcut[val]?.quantity;
          }
        }
      }
    });
  }
  AddToCart() {
    localStorage.setItem(
      `cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`,
      JSON.stringify(this.CartProdcut)
    );
    if (
      `cart ${JSON.parse(localStorage.getItem('UserLast')!).id}` in localStorage
    ) {
      let index: any = [];
      for (let val in Object.keys(this.CartProdcut)) {
        if (this.CartProdcut[val]?.item.id == this.DataID.id) {
          this.exit = true;
          index = val;
        }
      }
      this.CartProdcut.map((item) => {
        if (item.item?.id == this.DataID.id && item.quantity == this.amount) {
          this.exit = true;
          this.qun = true;
        }
      });
      console.log(this.qun);
      console.log(this.exit);
      if (this.exit) {
        if (this.qun && this.exit) {
          confirm('Do You want change the quantity ?');
        } else {
          this.CartProdcut[index].quantity = this.amount;
          this.qun = false;
          this.exit = false;
        }
      } else {
        this.ProductItem = { item: this.DataID, quantity: this.amount };
        this.CartProdcut.push(this.ProductItem);
        localStorage.setItem(
          `cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`,
          JSON.stringify(this.CartProdcut)
        );
        alert('Product added in ur cart');
      }
    } else {
      this.ProductItem = { item: this.DataID, quantity: this.amount };
      this.CartProdcut.push(this.ProductItem);
      localStorage.setItem(
        `cart ${JSON.parse(localStorage.getItem('UserLast')!).id}`,
        JSON.stringify(this.CartProdcut)
      );
    }
    this.qun = false;
    this.exit = false;
  }

  minsquantity() {
    if (this.amount > 0) this.amount--;
  }
  PlusQuantity() {
    this.amount++;
  }
}
