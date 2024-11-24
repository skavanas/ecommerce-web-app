import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Component, Output,EventEmitter } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanierComponent } from '../panier/panier.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink } from '@angular/router';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,PanierComponent,SignupComponent,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private service :NavbarService){}
  search!:string;

  change (search:string){
    this.service.search(search);
  }
    
  
}
  

