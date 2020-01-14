import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipping } from 'src/app/models/shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // initialazed because of: undefined  
  items: Array<Product> = new Array<Product>();

  constructor(private http: HttpClient) { }

  // add new product to cart 
  addToCart(product: Product): void {
    this.items.push(product);
  }

  deleteItem(product: Product): Product[] {
    let index: number = this.items.findIndex((p: Product) => p.id === product.id);
    this.items.splice(index, 1);
    return this.items;
  }

  updateItem(product: Product): void {
    let oldProduct: Product = this.items.find((p : Product) => p.id === product.id);
    if (oldProduct) {
      oldProduct.description = product.description ? product.description : oldProduct.description;
      oldProduct.image = product.image ? product.image : oldProduct.image;
      oldProduct.name = product.name ? product.name : oldProduct.name;
      oldProduct.price = product.price ? product.price : oldProduct.price;

    }
  }

  // get all products 
  getItems(): Product[] {
    return this.items;
  }

  getShippingPrices() : Observable<Shipping> {
    return this.http.get<Shipping>('assets/shipping.json');
  }

  // clear all products
  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }


}

