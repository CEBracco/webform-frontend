import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemModule } from 'src/app/components/products/product-item/product-item.module';
import { ProductsFilterModule } from 'src/app/components/products/products-filter/products-filter.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductItemModule,
    ProductsFilterModule
  ]
})
export class ProductsModule { }
