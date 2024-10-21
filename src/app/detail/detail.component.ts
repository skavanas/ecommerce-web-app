import { Component, Input } from '@angular/core';
import { product } from '../module/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() product!: product;  // Selected product to display

  constructor() {}

  closeDetails() {
    // Emit event or clear the product (handled by parent component)
  }
}
