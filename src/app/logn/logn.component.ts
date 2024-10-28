import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.css']
})
export class LognComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLoginSubmit() {
    // Ajouter ici la logique de validation pour l'authentification.
    if (this.email && this.password) {
      // Simuler un login réussi
      console.log('Login successful');
      this.router.navigate(['/home']); // Rediriger vers la page d'accueil après le login
    } else {
      console.log('Invalid email or password');
    }
  }
}
