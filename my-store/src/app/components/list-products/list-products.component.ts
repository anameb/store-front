import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {Product} from '../../models/product.model'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  products!: Product[];
  dataSource!: MatTableDataSource<Product>;


  //@ViewChild(MatPaginator, { static: false }) paginator: MatTableDataSourcePaginator;

  displayedColumns: string[] = ['id', 'name', 'inInventory', 'enabled', 'min', 'max','delete','update'];

  constructor(private productService:ProductService,
    private router: Router,) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.productService.getAllProducts().subscribe((data: Product[])=> {
      //products =>this.products = products

      //console.log(data);
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      //this.dataSource.paginator = this.paginator;
    },  err => {
      alert('Error en el servicio de guardar.');
    });
}


delete(product: Product): void {
  swal.fire({
    title: '¿Está seguro?',
    text: `¿Seguro desea eliminar la asignación: ${product.id} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.productService.delete(product.id).subscribe(data => {

        // this.assignments = this.assignments.filter(c => c !== assignment);
        this.loadTable();
        swal.fire(
          'Eliminado!',
          'Se ha eliminado la asignación',
          'success'
        );
      }, err => {
        //this.snackBar.open('Tenemos problemas en este momento.', 'X', {panelClass: ['error']});
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error
        });
      });
    }
  });
}

update(product:Product): void {
  localStorage.removeItem('productId');
  localStorage.setItem('productId', String(product.id));
  this.router.navigate(['products/update']);
}

}

