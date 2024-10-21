import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductlistComponent,NavbarComponent,HttpClientModule,CategoryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  selectedCategory: string = ''; // Default to showing all products
  searchTerm: string = ''; // To hold the current search term

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm; // Update the search term
  }

  
}
