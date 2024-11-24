import { Component, Input } from '@angular/core';
import { product } from '../module/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierService } from '../panier.service';
import { CommandeService } from '../commande.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  
  cartProducts: product[] = [];
  constructor(private service: PanierService,private service1:CommandeService){}
  confirmer(){
    this.service1.confirmeOrder(this.cartProducts)
  }
  addpanier() {
    this.service.emitProduct$.subscribe((products: product[]) => {
      this.cartProducts = products; // Update cartProducts with the latest array from the service
      console.log('Cart products:', this.cartProducts); // Log the current cart products
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
