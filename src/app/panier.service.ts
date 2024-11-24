import { Injectable } from '@angular/core';
import { product } from './module/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private cartProducts: product[] = []; // Array to hold products
  private productSubject = new BehaviorSubject<product[]>(this.cartProducts); 
  emitProduct$ = this.productSubject.asObservable();

  addpanier(product: product) {
    this.cartProducts.push(product); // Add new product to the cart array
    this.productSubject.next(this.cartProducts); // Emit the updated cart
  }


  constructor() { }
}
