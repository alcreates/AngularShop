import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  category: string;
  products: Product[]= [];
  filteredProducts: Product[] = [];
  categories$;
  constructor( route: ActivatedRoute, productService: ProductService, categoryService: CategoryService) { 
    productService.getAll().switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    }).subscribe(params => {
        // tslint:disable-next-line:prefer-const
         this.category = params.get('category');
         this.filteredProducts = (this.category) ?
         this.products.filter(p => p.category === this.category) :
         this.products;
    });
    this.categories$ = categoryService.getAll();
  }


}
