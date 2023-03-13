import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from 'src/app/models/order-item/order-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item!: OrderItem;
  @Output() onRemove = new EventEmitter<OrderItem>();
  @Output() onAddAnother = new EventEmitter<OrderItem>();

  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    this.onRemove.emit(this.item);
  }

  addAnother() {
    this.onAddAnother.emit(this.item);
  }
}
