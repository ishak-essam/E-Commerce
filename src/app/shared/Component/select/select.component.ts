import { style } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  Style: string = 'white';
  StyleAll: string = '#84ca93';
  Style1: string = '';
  Style2: string = '';
  Style3: string = '';
  Style4: string = '';
  Style5: string = '';
  bool: boolean = true;
  @Input() Data: any[] = [];
  @Input() title: any = '';
  @Output() Selected = new EventEmitter();

  detect(event: any) {
    this.Style1 = '#42a7e5';

    if (event == 1) {
      event = 'All';
      this.Selected.emit(event);
      this.Style2 = this.Style;
      this.Style3 = this.Style;
      this.Style4 = this.Style;
      this.Style5 = this.Style;
      console.log(event);
    } else {
      console.log(event);
      this.Selected.emit(event);
      if (event === 'electronics') {
        this.Style1 = this.Style;
        this.Style2 = this.StyleAll;
        this.Style3 = this.Style;
        this.Style4 = this.Style;
        this.Style5 = this.Style;
      } else if (event === 'jewelery') {
        this.Style1 = this.Style;
        this.Style2 = this.Style;
        this.Style3 = this.StyleAll;
        this.Style4 = this.Style;
        this.Style5 = this.Style;
      } else if (event === "men's clothing") {
        this.Style1 = this.Style;
        this.Style2 = this.Style;
        this.Style3 = this.Style;
        this.Style4 = this.StyleAll;
        this.Style5 = this.Style;
      } else if (event === "women's clothing") {
        this.Style1 = this.Style;
        this.Style2 = this.Style;
        this.Style3 = this.Style;
        this.Style4 = this.Style;
        this.Style5 = this.StyleAll;
      }
    }
  }
}
