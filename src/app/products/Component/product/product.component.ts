import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() data: any = [];
  @Output() item = new EventEmitter();
  amount: number = 0;
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
    console.log(this.amount);
  }
  chang() {
    this.amount++;
  }
}
