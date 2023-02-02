import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   /*@Input() product: Product = {
    id: '',
    name: '',
    inInventory: 0,
    enabled: true,
    min: 0,
    max: 0,
    image:''
  };*/


  product : Product = new Product;
  titulo:string="Resgistro de producto";


  constructor(
    private formBuilder: FormBuilder,
    private productService:ProductService,
    private router: Router,
    private http: HttpClient
    ) {}
    addForm!: FormGroup;

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      inInventory: ['', [Validators.required, Validators.maxLength(10)]],
      min: ['', [Validators.required, Validators.maxLength(10)]],
      max: ['', [Validators.required, Validators.maxLength(10)]],
      enabled: [true, Validators.required]
    });
  }

  addProduct() {
    if (!this.addForm.valid) {
      alert('Debe diligenciar todos los campos obligatorios.');
      return;
    }

    this.product.name = this.addForm.value.name;
    this.product.inInventory = this.addForm.value.inInventory;
    this.product.min = this.addForm.value.min;
    this.product.max = this.addForm.value.max;
    this.product.enabledProduct = this.addForm.value.enabled;

    this.productService.addProduct( this.product )
      .subscribe(data => {
        this.router.navigate(['products']);
      }, err => {
        alert('Error en el servicio de guardar.');
      });
  }

  listProduct(): void {
    this.router.navigate(['products']);
  }

}
