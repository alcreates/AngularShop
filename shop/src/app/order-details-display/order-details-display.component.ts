import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-details-display',
  templateUrl: './order-details-display.component.html',
  styleUrls: ['./order-details-display.component.css']
})
export class OrderDetailsDisplayComponent implements OnInit {
@Input('items') items;
  constructor() { }

  ngOnInit() {
    console.log(this.items)
  }

}
