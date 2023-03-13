import { OrderItem } from "../order-item/order-item";
import { Product } from "../product/product";

export class ShoppingCart {
    items: OrderItem[] = [];

    addItem(product: Product) {
        let orderItem = new OrderItem(product);
        this.items.push(orderItem);
        return orderItem;
    }

    removeItem(item: OrderItem) {
        this.items = this.items.filter((i) => i.localId != item.localId);
    }
}
