import { Component, OnInit } from '@angular/core';
import {Product} from '../../app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  clickProduct(id : number){
    console.log('product');
    console.log(id);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
