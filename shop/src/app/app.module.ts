import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import {MatCardModule} from '@angular/material';
import { DataTableModule } from 'angular-4-data-table';
import {MatListModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { MatTableModule } from '@angular/material';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminOrderDetailComponent } from './admin-order-detail/admin-order-detail.component';
import { OrderDetailsDisplayComponent } from './order-details-display/order-details-display.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailsComponent,
    AdminOrderDetailComponent,
    OrderDetailsDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    CustomFormsModule,
    DataTableModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    RouterModule.forRoot(
      [
        {path: '', component: ProductsComponent},
        {path: 'products', component: ProductsComponent },
        {path: 'shoppingcart', component: ShoppingCartComponent},
        {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
        {path: 'order-success/:id', component: OrderSuccessComponent , canActivate: [AuthGuardService]},
        {path: 'login', component: LoginComponent},
        {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'my/orders', component: MyordersComponent, canActivate: [AuthGuardService]},
        {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/products', component: AdminProductsComponent , canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'my/order-details/:id', component: OrderDetailsComponent , canActivate: [AuthGuardService]},
        {path: 'admin/order-details/:id', component: AdminOrderDetailComponent , canActivate: [AuthGuardService, AdminAuthGuardService]}

      ]
    )
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
