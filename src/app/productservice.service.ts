import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) {
  }
  
  getproducts(): Observable<any> {
    return this.http.get("https://dummyjson.com/products");
  }
  searchProducts(query: string): Observable<any> {
    
    return this.http.get(`https://dummyjson.com/products?name=${query}`);
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
