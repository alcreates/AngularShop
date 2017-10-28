import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingFormComponent } from 'app/shipping/components/shipping-form/shipping-form.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatListModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent },
      {path: 'shoppingcart', component: ShoppingCartComponent},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success/:id', component: OrderSuccessComponent , canActivate: [AuthGuardService]},
      {path: 'my/orders', component: MyordersComponent, canActivate: [AuthGuardService]},
    ])
  ],
  declarations: [
    OrderSuccessComponent,
    MyordersComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ShoppingCartSummaryComponent,
    ProductFilterComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
