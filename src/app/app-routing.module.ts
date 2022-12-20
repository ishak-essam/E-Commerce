import { CommonComponent } from './user/Component/common/common.component';
import { ProductsComponent } from './products/Component/products/products.component';
import { CartComponent } from './carts/Component/cart/cart.component';
import { ProductDetailComponent } from './products/Component/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: ' ', pathMatch: 'full' },
  { path: 'login', component: CommonComponent },
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
