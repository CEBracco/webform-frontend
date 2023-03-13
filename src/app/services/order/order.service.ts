import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { handleError, Response } from 'src/app/models/response/response';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/models/order/order';
import { OrderItem } from 'src/app/models/order-item/order-item';

const orderService = `${environment.apiBase}/order`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public saveOrder(orderItems: OrderItem[]): Observable<Order | undefined> {
    const productIds = orderItems.map(oi => { return { ProductId: oi.Product.id }});
    const orderRequest = { orders: productIds }
  
    return this.http.post<Response<Order | undefined>>(`${orderService}`, orderRequest)
      .pipe(
        map((res: any) => {
          if (res.ok) {
            return plainToInstance(Order, res.data);
          } else {
            handleError(res)
            return undefined;
          }
        }),
        catchError(error => {
          throwError(error);
          return []
        })
      );
  }
}
