import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

create(product) {
  
 return this.db.list('/products').push(product);
}

getAll(){
  return this.db.list('/products');
}

getProduct(productId){
  return this.db.object('/products/' + productId);
}

update(productID, product){
  return this.db.object('/products/' + productID).update(product);
}

delete(productId){
  return this.db.object('/products/' + productId).remove();
}

}
