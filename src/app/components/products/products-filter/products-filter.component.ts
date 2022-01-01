import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group/group';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  @Input() groups: Group[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
