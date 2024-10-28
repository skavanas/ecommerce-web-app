import { Component,  Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductserviceService } from '../productservice.service';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../module/product';
import { DetailComponent } from '../detail/detail.component';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, HttpClientModule, DetailComponent],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: product[] = [];
 
  @Input() category!: string; 
  @Input() searchTerm: string = ''; 
  
  constructor(private service: ProductserviceService, private servicen: NavbarService) {}
  
  ngOnInit(): void {
    this.fetchAllProducts();  // Fetch all products initially
    this.subscribeToSearch(); // Subscribe to search term changes
  }

  // Subscription to search term changes from NavbarService
  private subscribeToSearch() {
    this.servicen.emitsearch.subscribe((search: string) => {
      if (search) {
        this.searchTerm = search; // Update searchTerm and filter products
        this.filterProducts();
      } else {
        this.fetchAllProducts(); // Refetch all products if search is cleared
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if the category has changed
    if (changes['category'] && changes['category'].currentValue) {
      this.fetchProductsByCategory(changes['category'].currentValue);
    } else if (!this.category) {
      this.fetchAllProducts();
    }
  }

  // Fetch products by category
  private fetchProductsByCategory(category: string) {
    this.service.getProductsByCategory(category).subscribe((data: any) => {
      this.products = data.products.map(

        (item: any) =>
          new product(item.title, item.images[0], item.price, item.stock)
      );
      this.filterProducts(); // Apply filtering after loading
    });
  }

  // Fetch all products
  private fetchAllProducts() {
    this.service.getproducts().subscribe((data: any) => {
      this.products = data.products.map(
        (item: any) =>
          new product(item.title, item.images[0], item.price, item.stock)
      );
      this.filterProducts(); // Apply filtering after loading
    });
  }

  // Filter products based on search term
  private filterProducts() {
    if (this.searchTerm) {
      this.products = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
