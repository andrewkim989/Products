import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  date = Date.now();

  products: any[] = [
    {name: "Rainbow Dash plush", description: "An awesome plush created by a brony", 
    price: "250", quantity: "50", created_at: this.date, updated_at: this.date},
    {name: "Princess Luna plush", description: "A marvelous plush created by a brony", 
    price: "204", quantity: "30", created_at: this.date, updated_at: this.date},
    {name: "Silverstream sculpture", description: "Sculpture created by a fan",
    price: "130.24", quantity: "25", created_at: this.date, updated_at: this.date}
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
    this.getProducts();
  }

  deleteProduct(product) {
    var index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.getProducts();
  }
}
