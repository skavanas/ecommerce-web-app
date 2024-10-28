import { Component, Input } from '@angular/core';
import { product } from '../module/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
 
  cartProducts: product[] = [];
  constructor(private service: PanierService){}
  addpanier(){
    this.service.emitProduct$.subscribe((product) => {
      if (product) { // Check that product is not null
        this.cartProducts.push(product);
        console.log('Adding product:', product);

      }
    });
  }
  getTotalCost(): number {
    return this.cartProducts.reduce((acc, product) => acc + product.prix * product.quantite, 0);
  }

  // Méthode pour supprimer un produit du panier
  removeFromCart(product: product) {
    this.cartProducts = this.cartProducts.filter((p) => p !== product);
  }

  ngOnInit(): void {this.addpanier()}


}
