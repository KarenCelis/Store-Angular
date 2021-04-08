import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      const id = params.id;
      this.fetchProduct(id);
     // this.product = this.productsService.getProduct(id) as Product;

    });
  }
  fetchProduct(id : string){
    this.productsService.getProduct(id).subscribe(product => {
     this.product = product
    })

  }
  createProduct(){

    const newProduct : Product={
id : '123',
title : 'nuvveooo ',
image : 'assets/images/banner-1.jpg',
price : 5000,
description: 'newwwww'
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product)
     })
  }

}
