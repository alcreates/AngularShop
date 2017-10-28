import { Observable } from 'rxjs/Observable';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id;
  items$;
  constructor( private route: ActivatedRoute, private orderService:OrderService) {

  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if ( this.id ) {
      this.items$ = await this.orderService.getOrderItems(this.id);
    }

  }

}
