import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/models/order-item/order-item';
import { Product } from 'src/app/models/product/product';
import { ShoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { ShoppingCartSubscriptor } from './shopping-cart-subscriptor';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartStorageKey = 'shoppingCart';
  shoppingCart: ShoppingCart = new ShoppingCart();
  subscriptors: ShoppingCartSubscriptor[] = [];

  constructor(private storage: StorageMap) {
    this.updateShoppingCart();
  }

  addItem(product: Product) {
    const observable = new Observable<OrderItem>((observer) => {
      this.updateShoppingCart().subscribe((shoppingCart) => {
        var orderItem = this.shoppingCart.addItem(product);
        this.saveShoppingCart().subscribe(() => {
          observer.next(orderItem);
          observer.complete();
        });
      });
    });
    return observable;
  }

  removeItem(item: OrderItem) {
    const observable = new Observable<OrderItem>((observer) => {
      this.updateShoppingCart().subscribe((shoppingCart) => {
        this.shoppingCart.removeItem(item);
        this.saveShoppingCart().subscribe(() => {
          observer.next(item);
          observer.complete();
        });
      });
    });
    return observable;
  }
  
  getItems() {
    const observable = new Observable<OrderItem[]>((observer) => {
      this.updateShoppingCart().subscribe((shoppingCart) => {
        observer.next(this.shoppingCart.items);
        observer.complete();
      });
    });
    return observable;
  }

  updateShoppingCart() {
    const observable = new Observable<ShoppingCart>((observer) => {
      this.storage.get(this.shoppingCartStorageKey).subscribe((shoppingCart) => {
        if (shoppingCart) {
          this.shoppingCart = plainToInstance(ShoppingCart, shoppingCart);
        }
        this.notifySubscriptors();
        observer.next(this.shoppingCart);
        observer.complete();
      });
    });
    return observable;
  }

  saveShoppingCart() {
    const observable = new Observable<ShoppingCart>((observer) => {
      this.storage.set(this.shoppingCartStorageKey, this.shoppingCart).subscribe(() => {
        this.updateShoppingCart().subscribe((shoppingCart) => {
          observer.next(this.shoppingCart);
          observer.complete();
        });
      });
    });
    return observable;
  }

  notifySubscriptors() {
    this.subscriptors.forEach(subscriptor => {
      subscriptor.onShoppingCartChange(this.shoppingCart);
    });
  }

  subscribe(shoppingCartSubscriptor: ShoppingCartSubscriptor) {
    this.updateShoppingCart().subscribe((shoppingCart) => {
      this.subscriptors.push(shoppingCartSubscriptor);
      shoppingCartSubscriptor.onShoppingCartChange(shoppingCart);
    });
  }
}
