import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string;
  products: Product[]= [];
  filteredProducts: Product[] = [];
  cart$: Observable<ShoppingCart>;
  

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) { 
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }
  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
  } 
  private populateProducts() {
    this.productService.getAll().switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    }).subscribe(params => {
        // tslint:disable-next-line:prefer-const
         this.category = params.get('category');
         this.applyFilter();
    });
  }

}
