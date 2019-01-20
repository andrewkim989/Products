import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product.service";
import { Product } from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [Product]
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAll();
  }

  products:any;

  getAll() {
    this.products = this.productService.getProducts();
  }

  delete(product) {
    this.productService.deleteProduct(product);
  }
}
