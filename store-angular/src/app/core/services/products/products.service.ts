import { Injectable } from '@angular/core';
import {Product} from './../../../product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http : HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id: String){

    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product : Product){
return this.http.post(`${environment.url_api}/products`, product);
  }
}
