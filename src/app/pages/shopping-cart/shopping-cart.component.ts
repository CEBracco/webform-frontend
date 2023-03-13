import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/order-item/order-item';
import { OrderService } from 'src/app/services/order/order.service';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: OrderItem[] = []; 
  totalPrice!: number;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.loadShoppingCart();
  }

  async loadShoppingCart() {
    this.cartItems = await this.shoppingCartService.getItems().toPromise();
    this.totalPrice = this.cartItems.reduce((x, o) => x + o.Product!.price, 0);
  }

  async removeItem(cartItem: OrderItem) {
    await this.shoppingCartService.removeItem(cartItem).toPromise();
    this.loadShoppingCart();
  }

  async addAnotherItem(cartItem: OrderItem) {
    await this.shoppingCartService.addItem(cartItem.Product).toPromise();
    this.loadShoppingCart();
  }
  
  async saveOrder() {
    await this.loadShoppingCart();
    this.orderService.saveOrder(this.cartItems).subscribe(order => {
      console.log(order);
    });
  }
}
