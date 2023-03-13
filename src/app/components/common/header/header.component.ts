import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { ShoppingCartSubscriptor } from 'src/app/services/shopping/shopping-cart-subscriptor';
import { ShoppingCartService } from 'src/app/services/shopping/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,ShoppingCartSubscriptor {

  shoppingCartItemCount?: number

  constructor(private shoppingCartService: ShoppingCartService) { }
  
  ngOnInit(): void {
    this.shoppingCartService.subscribe(this);
  }
  
  onShoppingCartChange(shoppingCart: ShoppingCart) {
    this.shoppingCartItemCount = shoppingCart.items.length;
  }
}
