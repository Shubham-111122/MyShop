import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Changed styleUrl to styleUrls
})
export class NavbarComponent {
  constructor(private router: Router, private cartService: CartService) {}

  // Check if the user is logged in by verifying if there's a token in localStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn'); // Check for the presence of isLoggedIn flag
  }

  // Logout function to remove token from localStorage and redirect to the home page
  logout(): void {
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('user');
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }
}
