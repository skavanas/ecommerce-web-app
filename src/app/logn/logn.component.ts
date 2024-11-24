import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logn',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './logn.component.html',
  styleUrl: './logn.component.css'
  
})
export class LognComponent {
  email: string = '';
  password: string = '';

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  async onLogin() {
    try {
      await this.firebaseService.signIn(this.email, this.password);
      alert('Logged in successfully');
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Login error', error);
      alert(error.message || 'An unknown error occurred.');
    }
  }
}
