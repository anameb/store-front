import { Component, OnInit, Input} from '@angular/core';

import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   @Input() product: Product = {
    id: '',
    name: '',
    inInventory: 0,
    enabled: true,
    min: 0,
    max: 0,
    image:''
  };

  constructor() {}

  ngOnInit(): void {

  }

}
