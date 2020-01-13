import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from 'src/app/data.source/data.source';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Array<Product> = Products;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.product = this.products[params['id'] - 1];
    });

  }

}
