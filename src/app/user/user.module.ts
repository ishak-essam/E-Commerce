import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponent } from './Component/common/common.component';
import { REGISTERComponent } from './Component/register/register.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [LoginComponent, CommonComponent, REGISTERComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, ReactiveFormsModule, MatIconModule],
})
export class UserModule {}
