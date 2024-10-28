import { Injectable } from '@angular/core';
import { product } from './module/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private productSubject = new BehaviorSubject<product | null>(null); 
  emitProduct$ = this.productSubject.asObservable();

  addpanier(product: product) {
    this.productSubject.next(product);
  }

  constructor() { }
}
