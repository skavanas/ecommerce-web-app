import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductserviceService } from '../productservice.service';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../module/product';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, HttpClientModule,DetailComponent],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: product[] = [];
  selectedProduct?: product;
  @Input() category!: string; 
  @Input() searchTerm: string = ''; 

  constructor(private service: ProductserviceService) {}

  ngOnInit(): void {
    this.fetchAllProducts(); // Charger tous les produits à l'initialisation
  }

  ngOnChanges(changes: SimpleChanges) {
    // Vérifier si la catégorie a changé
    if (changes['category'] && changes['category'].currentValue) {
      this.fetchProductsByCategory(changes['category'].currentValue);
    } else if (!this.category) {
      // Si aucune catégorie n'est sélectionnée, récupérer tous les produits
      this.fetchAllProducts();
    }

    // Appliquer le filtrage des produits en fonction du terme de recherche
    if (changes['searchTerm'] && this.products.length > 0) {
      this.filterProducts();
    }
  }

  // Récupérer les produits par catégorie
  private fetchProductsByCategory(category: string) {
    this.service.getProductsByCategory(category).subscribe((data: any) => {
      this.products = data.products.map(
        (item: any) =>
          new product(item.title, item.images[0], item.price, item.stock)
      );
      this.filterProducts(); // Appliquer le filtrage après chargement
    });
  }

  // Récupérer tous les produits
  private fetchAllProducts() {
    this.service.getproducts().subscribe((data: any) => {
      this.products = data.products.map(
        (item: any) =>
          new product(item.title, item.images[0], item.price, item.stock)
      );
      this.filterProducts(); // Appliquer le filtrage après chargement
    });
  }

  // Filtrer les produits en fonction du terme de recherche
  private filterProducts() {
    if (this.searchTerm) {
      this.products = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  onProductSelected(product: product) {
    this.selectedProduct = product;  
  }

  closeDetails() {
    this.selectedProduct = undefined;  
  }
  
}
