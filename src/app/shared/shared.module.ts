import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './Component/spinner/spinner.component';
import { SelectComponent } from './Component/select/select.component';
@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [CommonModule, RouterModule, BrowserModule, FormsModule],
  exports: [HeaderComponent, SpinnerComponent, SelectComponent],
})
export class SharedModule {}
