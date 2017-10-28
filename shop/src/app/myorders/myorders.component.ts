import { OrderService } from '../shared/services/order.service';
import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders$;
  constructor( private authService: AuthService, private orderService: OrderService) {
      this.orders$ =  authService.user$.switchMap( u => orderService.getOrdersByUser(u.uid));
   }

  ngOnInit() {
  }

}
