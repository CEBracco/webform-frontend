import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartItemComponent } from 'src/app/components/shopping-cart/shopping-cart-item/shopping-cart-item.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
