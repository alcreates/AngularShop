import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { RouterModule } from '@angular/router';
import { AdminAuthGuardService } from 'app/admin/services/admin-auth-guard.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { CustomFormsModule } from 'ng2-validation';

import { SharedModule } from './../shared/shared.module';
import { AdminOrderDetailComponent } from './components/admin-order-detail/admin-order-detail.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [
    SharedModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forChild(
      [

        {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/products', component: AdminProductsComponent , canActivate: [AuthGuardService, AdminAuthGuardService]},
        {path: 'admin/order-details/:id', component: AdminOrderDetailComponent , canActivate: [AuthGuardService, AdminAuthGuardService]}

      ]
    )
  ],
  declarations: [
    ProductFormComponent,
    AdminOrderDetailComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  providers: [
    AdminAuthGuardService
  ],
  exports: [
    AdminOrderDetailComponent
  ]
})
export class AdminModule { }
