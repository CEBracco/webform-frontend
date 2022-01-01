import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemModule } from 'src/app/components/products/product-item/product-item.module';
import { ProductsFilterModule } from 'src/app/components/products/products-filter/products-filter.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ProductItemModule,
    ProductsFilterModule,
    NgbModule,
    LightboxModule
  ]
})
export class ProductsModule { }
