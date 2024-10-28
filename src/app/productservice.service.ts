import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) {
  }
  
  private productSubject = new BehaviorSubject<product | null>(null); 
  emitProduct$ = this.productSubject.asObservable();

  showp(product: product) {
    this.productSubject.next(product);
  }
  getproducts(): Observable<any> {
    return this.http.get("https://dummyjson.com/products?limit=0");
  }
  searchProducts(query: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/search?q=${query}`);
  }
  
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/category/${category}`);
  }
  getproductbyid(id:string):Observable<any>{
    return this.http.get(`https://dummyjson.com/product/${id}`);
  }
  getCategories():Observable<any>{
    return this.http.get("https://dummyjson.com/products/categories");
  }
}
