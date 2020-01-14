import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from 'src/app/data.source/data.source';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Array<Product> = Products;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  goBack(): void {
    window.history.back();
  }

  addToCart(product: Product) : void {
    this.cartService.addToCart(product);
    console.log(product);
    window.alert('Your product has been added to your cart');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.product = this.products[params['id'] - 1];
    });

  }

}
