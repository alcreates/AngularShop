import { ShoppingCart } from './../models/shopping-cart';
import { AuthService } from './../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  userId: string;
  userSubscription: Subscription;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder(val) {
    const order = new Order(this.userId, val , this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
  
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
