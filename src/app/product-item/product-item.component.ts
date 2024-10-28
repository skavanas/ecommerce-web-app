import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../module/product';
import {  NgFor, NgStyle } from '@angular/common';
import { ProductserviceService } from '../productservice.service';
import { PanierService } from '../panier.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgStyle,RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:product;
  
  constructor(private service:PanierService,private service2:ProductserviceService){
  }
  showp(){
    this.service2.showp(this.product);
  }
  addpanier(){
    this.service.addpanier(this.product);
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
