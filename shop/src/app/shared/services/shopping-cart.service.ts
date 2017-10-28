import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';
import { async } from '@angular/core/testing';
import { Product } from '../models/products';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  async getCart(): Promise<Observable<ShoppingCart>> {
    // tslint:disable-next-line:prefer-const
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId ).map(x => new ShoppingCart(x.items));
  }
  private getItem(cartId: string, productId: string) {
    return  this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
  private async getOrCreateCartId(): Promise<string> {

    // tslint:disable-next-line:prefer-const
    let cartId = localStorage.getItem('cartId');

      if (cartId) { return cartId; }
      // tslint:disable-next-line:prefer-const
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;

  }
  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }
  async removeFromCart(product: Product) {

    this.updateItem(product, -1 );
  }
  private async updateItem(product: Product, change: number ) {
     // tslint:disable-next-line:prefer-const
     let cartId = await this.getOrCreateCartId();
     // tslint:disable-next-line:prefer-const
     let item$ = this.getItem(cartId, product.$key);
     item$.take(1).subscribe(item => {
      const quantity =  ( item.quantity || 0 ) + change ;
      if (quantity === 0) { 

        item$.remove()
      } else {
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity
         });
      }
     });
  }
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

}
