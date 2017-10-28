import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

import { MatFormFieldModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { MatMenuModule, MatSelectModule } from '@angular/material';
import { OrderDetailsDisplayComponent } from 'shared/components/order-details-display/order-details-display.component';
import { OrderDetailsComponent } from 'shared/components/order-details/order-details.component';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule.forChild([
      {path: 'my/order-details/:id', component: OrderDetailsComponent , canActivate: [AuthGuardService]}

    ])

  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailsDisplayComponent,
    OrderDetailsComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailsDisplayComponent,
    OrderDetailsComponent
  ],
  providers : [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
