import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from "./product.service"; 

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductNewComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
