import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])

  ],
  declarations: [
    NavBarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
