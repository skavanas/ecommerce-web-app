import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AuthComponent } from './auth/auth.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    {path:"products",component:ProductlistComponent},
    {path:"panier",component:PanierComponent},
    {path:"authentification",component:AuthComponent},
    {path:"home",component:ProductlistComponent},
    {path:"home",component:SignupComponent},
    {path:"",component:ProductlistComponent},
];
