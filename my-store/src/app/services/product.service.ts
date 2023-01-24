import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


  private url: string = 'http://localhost:8080/products';

   //obtener lista de productos
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  //agregar productos
  addProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  //obtener producto por id
  getProductById(id:number):Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id);
  }

  //actualizar Producto
  update(product:Product):Observable<Product> {
    return this.http.put<Product>(this.url, product);
  }

  //eliminar un producto
  delete(id:number):Observable<Product> {
    return this.http.delete<Product>(this.url + '/' + id);
  }

}
