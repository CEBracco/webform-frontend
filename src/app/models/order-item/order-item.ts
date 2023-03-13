import { Type } from "class-transformer";
import { Product } from "../product/product";
import * as uuid from 'uuid';

export class OrderItem {

    localId!: string;
    @Type(() => Product)
    Product!: Product;

    constructor(product: Product) {
        this.localId = uuid.v4();
        this.Product = product;
    }
}
