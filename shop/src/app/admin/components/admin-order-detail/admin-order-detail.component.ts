import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {

  id;
  items$;
  constructor( private route: ActivatedRoute, private orderService: OrderService) {

  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if ( this.id ) {
      this.items$ = await this.orderService.getOrderItems(this.id);
    }

  }
}
