import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  checkoutFrom: FormGroup;

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private router: Router) { }

  delete(product: Product): void {
    let yes: boolean = window.confirm('Are you sure !');
    if (yes) {
      this.cartService.deleteItem(product);
    }
  }

  onSubmit(): void {

    console.warn('your order has been submitted', this.checkoutFrom.value);
    this.products = this.cartService.clearCart();
    this.checkoutFrom.reset();
    window.alert('Thank You: ');
    this.router.navigateByUrl('/');
  }

  createForm(): void {
    this.checkoutFrom = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.createForm();
    console.log(this.products);
  }

}
