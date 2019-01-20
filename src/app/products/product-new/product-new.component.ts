import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: any;
  date = Date.now();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.newProduct = {name: "", description: "", price: 0, quantity: 0, 
    created_at: this.date, updated_at: this.date};
  }

  createProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = {name: "", description: "", price: 0, quantity: 0,
    created_at: this.date, updated_at: this.date};
  }
}
