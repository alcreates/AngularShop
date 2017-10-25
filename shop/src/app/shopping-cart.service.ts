import { ShoppingCart } from './models/shopping-cart';
import { async } from '@angular/core/testing';
import { Product } from './models/products';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  async getCart(): Promise<FirebaseObjectObservable<ShoppingCart>> {
    // tslint:disable-next-line:prefer-const
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId );
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
    this.updateItemQuantity(product, 1);
  }
  async removeFromCart(product: Product) {

    this.updateItemQuantity(product, -1 );
  }
  private async updateItemQuantity(product: Product, change: number ) {
     // tslint:disable-next-line:prefer-const
     let cartId = await this.getOrCreateCartId();
     // tslint:disable-next-line:prefer-const
     let item$ = this.getItem(cartId, product.$key);
     item$.take(1).subscribe(item => {

       item$.update({product: product, quantity: ( item.quantity || 0 ) + change });

     });
  }

}
