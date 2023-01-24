import { Component, OnInit } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  products: Product[] = [
    {
      id: '63cada3fc8071f260dc3a2f2',
      name:'Product name',
      inInventory:500,
      enabled:true,
      min:8,
      max:200,
      image: 'https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_640.png'
    },
    {
      id: '63cae6c5c8071f260dc3a2f3',
      name: 'Product1',
      inInventory: 200,
      enabled: true,
      min: 3,
      max: 50,
      image:'https://cdn.pixabay.com/photo/2020/01/22/06/26/cute-4784545_640.png'
    },
    {
      id: '63caeaa8d95bd637fb8e8486',
      name:'Product2',
      inInventory: 300,
      enabled: false,
      min: 10,
      max: 100,
      image: 'https://cdn.pixabay.com/photo/2016/07/20/12/41/pokemon-1530315_640.png'
    },
    {
      id: '63caeb13d95bd637fb8e8487',
      name: 'Product3',
      inInventory: 100,
      enabled: false,
      min: 30,
      max: 100,
      image:'https://cdn.pixabay.com/photo/2020/01/22/06/26/pokemon-4784549_640.png'
    },

    {
      id:'63caeb2fd95bd637fb8e8488',
      name:'Product4',
      inInventory: 600,
      enabled: true,
      min: 300,
      max: 500,
      image:'https://cdn.pixabay.com/photo/2020/01/22/06/26/pokemon-4784547_640.png'
    }

  ];

  constructor() {}

  ngOnInit(): void {

  }
}
