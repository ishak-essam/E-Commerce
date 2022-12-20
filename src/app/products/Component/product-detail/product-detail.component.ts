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
  loading: boolean = false;
  DataID: any = [];
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.Id = this.route.snapshot.paramMap.get('id');
    console.log(this.Id);
  }
  ngOnInit(): void {
    this.GetItem();
  }
  GetItem() {
    this.loading = true;
    this.service.GetCatgoryByID(this.Id).subscribe((ele: any) => {
      this.DataID = ele;
    });
  }
}
