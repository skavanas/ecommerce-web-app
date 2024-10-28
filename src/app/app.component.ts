import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  
  
}
