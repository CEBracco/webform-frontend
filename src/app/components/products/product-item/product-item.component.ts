import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  photos = ['https://florbarraufotografia.com/assets/products/mural-1.jpg', 'https://florbarraufotografia.com/assets/products/DSC_3650_compress75~2.jpg', 'https://florbarraufotografia.com/assets/products/DSC_2051~2_compress49.jpg', 'https://florbarraufotografia.com/assets/products/polaroid&yute.jpg']
  photoURL = ''

  constructor() { }

  ngOnInit(): void {
    this.photoURL = this.photos[Math.floor(Math.random() * 4)];
  }

}
