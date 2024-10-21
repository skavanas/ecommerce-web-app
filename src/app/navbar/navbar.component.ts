import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Component, Output,EventEmitter } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    
  @Output() searchTermChange = new EventEmitter<string>(); // Event emitter for search term

  onSearchChange(event: any) {
    const searchTerm = (event.target as HTMLInputElement).value; // Extract search term from input event
    this.searchTermChange.emit(searchTerm); // Emit the search term
  }
  
  
}
  

