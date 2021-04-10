import { Product } from './../../../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product.id).subscribe(rta => {
    if(rta){
      const idx = this.products.indexOf(product);
      if(idx>-1){
        this.products.splice(idx, 1);
      }
      this.products = [...this.products];
      window.confirm('Delete')
    }
    });
  }

}
