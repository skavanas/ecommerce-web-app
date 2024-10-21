import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: { name: string; slug: string; url: string }[] = [] 
  
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private service: ProductserviceService){}

  ngOnInit(){
    
    this.service.getCategories().subscribe((data:any[])=>
      this.categories=data)
    
  }
  onCategorySelect(category: string) {
    this.categorySelected.emit(category);
  }
}
