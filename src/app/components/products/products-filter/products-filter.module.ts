import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter.component';



@NgModule({
  declarations: [
    ProductsFilterComponent
  ],
  exports: [
    ProductsFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsFilterModule { }
