import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  Catgories: any[] = [];
  loading: boolean = false;
  CatClicked: string = '';
  CartProdcut: any[] = [];
  constructor(private Service: ProductsService) {}
  ngOnInit(): void {
    this.GetAll();
    this.GetAllCatgories();
  }
  GetAll() {
    this.loading = true;
    this.Service.GetAll().subscribe(
      (ele: any) => {
        this.loading = false;
        this.products = ele;
      },
      (ero) => {
        this.loading = false;
        alert(ero.status);
      }
    );
  }
  GetAllCatgories() {
    this.Service.GetAllCatgories().subscribe(
      (ele: any) => {
        this.Catgories = ele;
        this.loading = false;
      },
      (ero) => {
        this.loading = false;
        alert(ero.status);
      }
    );
  }
  filter(event: any) {
    let Cat = event;
    if (Cat == undefined || Cat == 'All') {
      this.GetAll();
    } else {
      this.GetCatgory(Cat);
    }
  }
  GetCatgory(keyword: string) {
    this.Service.GetCatgory(keyword).subscribe(
      (ele: any) => {
        this.loading = false;
        this.products = ele;
      },
      (ero) => {
        this.loading = false;
        alert(ero.status);
      }
    );
  }
  AddToCart(data: any) {
    if ('cart' in localStorage) {
      this.CartProdcut = JSON.parse(localStorage.getItem('cart')!);
      let exit = this.CartProdcut.find((item) => item.item.id == data.item.id);
      if (exit) {
        alert('Product is already in ur cart');
      } else {
        this.CartProdcut.push(data);
        localStorage.setItem('cart', JSON.stringify(this.CartProdcut));
        alert('Product' + data.title + '  added in ur cart');
      }
    } else {
      this.CartProdcut.push(data);
      localStorage.setItem('cart', JSON.stringify(this.CartProdcut));
    }
  }
}
