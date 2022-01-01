import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/product';
import { Group } from 'src/app/models/group/group';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  groups: Group[] = []

  constructor(private productService: ProductService) { 
    productService.list().subscribe(products => {
      this.products = products;
      this.loadGroups();
    });
  }

  ngOnInit(): void {
  }

  loadGroups(): void {
    var extractedGroups = this.products.map(p => p.Group).filter(g => g != null) as Group[];
    extractedGroups = extractedGroups.filter((v, i, a) => a.findIndex(t => (t!.id === v!.id)) === i);
    this.groups = extractedGroups.sort((g1, g2) => g1.name.localeCompare(g2.name));
  }
}
