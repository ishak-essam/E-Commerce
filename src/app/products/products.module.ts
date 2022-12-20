import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Component/products/products.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Component/product/product.component';
@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ProductComponent],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
})
export class ProductsModule {}
