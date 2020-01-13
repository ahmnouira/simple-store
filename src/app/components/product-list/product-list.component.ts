import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data.source/data.source';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Array<Product> = Products;

  constructor() { }

  share(product: Product) {
    alert('product' + product.name);
  }


  notify(product: Product) {
    alert('product' + product.description);
  }


  ngOnInit(): void { }

}
