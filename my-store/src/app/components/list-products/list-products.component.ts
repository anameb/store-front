import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  products: Product[]=[];

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products =>this.products = products

    );

  }
}
