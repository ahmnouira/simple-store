import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {


  @Input() product: Product;

  // transmitter des evemenets 
  @Output() notify: EventEmitter<Product> = new EventEmitter();


  constructor() { }


  ngOnInit(): void {

  }

}
