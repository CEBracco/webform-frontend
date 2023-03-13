import { Expose, Type } from "class-transformer";
import { OrderItem } from "../order-item/order-item";

export class Order {
    
    id!: number;

    @Expose({ name: 'Orders' })
    @Type(() => OrderItem)
    OrderItems!: OrderItem;
}
