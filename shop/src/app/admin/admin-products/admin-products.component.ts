import { Product } from './../../models/products';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy  {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;
  constructor(private productService: ProductService) {
   this.subscription = this.productService.getAll()
   .subscribe(products => {
    this.products = products;
    this.intializeTable(products);

   });
  }
  private intializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);

    this.tableResource.query({offset: 0})
    .then(items => this.items = items);

    this.tableResource.count()
    .then(count => this.itemCount = count);

  }

  reloadItems(params) {
    if (!this.tableResource) { return; }
    
    this.tableResource.query(params)
    .then(items => this.items = items);

  }

  ngOnInit() {
  }
  filter(query: string ){
    // tslint:disable-next-line:prefer-const
    let filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    this.intializeTable(filteredProducts);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
