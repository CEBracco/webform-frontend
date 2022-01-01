import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { handleError, Response } from 'src/app/models/response/response';
import { Product } from 'src/app/models/product/product';
import { environment } from 'src/environments/environment';

const productService = `${environment.apiBase}/product`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Product[]> {
    return this.http.get<Response<Product[]>>(`${productService}`)
      .pipe(
        map((res: any) => {
          if (res.ok) {
            return <unknown> plainToInstance(Product, res.data) as Product[];
          } else {
            handleError(res)
            return [];
          }
        }),
        catchError(error => {
          throwError(error);
          return []
        })
      );
  }

  public get(productId: number): Observable<Product | undefined> {
    return this.http.get<Response<Product | undefined>>(`${productService}/${productId}`)
      .pipe(
        map((res: any) => {
          if (res.ok) {
            return plainToInstance(Product, res.data);
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
