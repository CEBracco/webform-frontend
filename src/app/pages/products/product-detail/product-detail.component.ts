import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product | undefined;
  order:any = {
    quantity: 1
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  open(index: number): void {
    // open lightbox
    if (this.product) {
      var images = [this.product.image];
      this._lightbox.open(images.map((i: any) => { return { src: i, thumb: "", caption: ""} }), index);
    }
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  loadProduct(): void {
    var productId = parseInt(this.route.snapshot.paramMap.get('productId')!);
    this.productService.get(productId).subscribe(product => {
      this.product = product;
      console.log(product);
      
    });
  }
}
