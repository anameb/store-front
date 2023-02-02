import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import swal from 'sweetalert2';
import { __param } from 'tslib';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  product : Product = new Product;
  productEdit : Product = new Product;


  constructor(
    private formBuilder: FormBuilder,
    private productService:ProductService,
    private router: Router,
    private http: HttpClient
    ) {}

    editForm!: FormGroup;

  ngOnInit(): void {

    const productId = localStorage.getItem('productId');

    if (!productId) {
      alert('Acción invalida');
      this.router.navigate(['products']);
      return;
    }
    this.initForm();

    this.productService.getProductById(productId)
      .subscribe(data => {
        this.productEdit = data;
        this.initForm(data);
      }, err => {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error
        });
      });

    }
       /**
   * Inicializa el formulario del equipo
   *  @param editObject  Objeto a editar
   */

  initForm (editObject?: Product) {
    this.editForm = this.formBuilder.group({
      id: [],
      name: [((editObject) ? editObject.name : ' '), [Validators.required, Validators.maxLength(50)]],
      inInventory: [((editObject) ? editObject.inInventory : ' '), [Validators.required, Validators.maxLength(10)]],
      min: [((editObject) ? editObject.min : ' '), [Validators.required, Validators.maxLength(10)]],
      max: [((editObject) ? editObject.max : ' '), [Validators.required, Validators.maxLength(10)]],
      enabled: [((editObject) ? editObject.enabledProduct : true), Validators.required]
    });
    this.editForm.controls['id'].disable();
    this.editForm.controls['name'].disable();
  }

  updateProduct() {
    this.product.id = String (localStorage.getItem('productId'));
    this.product.name = this.productEdit.name;
    this.product.inInventory = this.editForm.value.inInventory;
    this.product.min = this.editForm.value.min;
    this.product.max = this.editForm.value.max;
    this.product.enabledProduct = this.editForm.value.enabled;


    this.productService.update(this.product)
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['product/form']);
      swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Asignación modificada con éxito',
        showConfirmButton: false,
        timer: 1500
      });
    }, err => {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'error'
      });
    });

  }

  listProduct(): void {
    this.router.navigate(['products']);
  }

}

