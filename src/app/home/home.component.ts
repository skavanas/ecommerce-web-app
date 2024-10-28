import { Component } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductlistComponent,CategoryListComponent,RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCategory: string = ''; // Default to showing all products
  
  
  onCategorySelected(category: string) {
    this.selectedCategory = category; // selected category
  }

 

}
