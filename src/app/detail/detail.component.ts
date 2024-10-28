import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
   product!: any;  // Selected product to display


  constructor(private service:ProductserviceService) {}
  ngOnInit(){
    this.showproduct()
  }
  showproduct(){
    this.service.emitProduct$.subscribe((p)=>this.product=p)
  }
  
  closeDetails() {
    // Emit event or clear the product (handled by parent component)
  }
}
