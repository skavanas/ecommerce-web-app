import { Component} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ProductserviceService } from '../productservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
   product!: any;  // Selected product to display
   
   constructor(private service:ProductserviceService,private location:Location) {}
  
   ngOnInit(){
    this.showproduct()
  }
  showproduct(){
    this.service.emitProduct$.subscribe((p)=>this.product=p)
  }
  
  
}
