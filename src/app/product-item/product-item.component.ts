import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../module/product';
import {  NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:product;
  @Output() productSelected = new EventEmitter<product>();  

  selectProduct() {
    this.productSelected.emit(this.product);  
  }
  
  getcolor(){
    if(this.product.quantite.valueOf() > 0){
      return "green"
    }else{
      return "red"
    }
  }
  getstate(){
    if(this.product.quantite.valueOf() > 0){
      return "En stock"
    }else{
      return "En rupture de stock"
    }
  }
}
