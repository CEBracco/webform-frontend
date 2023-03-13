import { ShoppingCart } from "src/app/models/shopping-cart/shopping-cart";

export interface ShoppingCartSubscriptor {
    onShoppingCartChange(shoppingCart: ShoppingCart): any;
}
