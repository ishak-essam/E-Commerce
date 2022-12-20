import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule,
    CartsModule,
    BrowserModule,
    ProductsModule,
    CartsModule,
    UserModule,
  ],
})
export class AppModule {}
