import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LognComponent } from './logn/logn.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [

    {path:"products",component:ProductlistComponent},
    {path:"panier",component:PanierComponent},
    {path:"home",component:HomeComponent},
    {path:"signup",component:SignupComponent},
    {path:"",redirectTo: "/home", pathMatch: "full" },
    {path:"login",component:LognComponent},
    {path:"details/:name",component:DetailComponent,pathMatch:'full'}
];
