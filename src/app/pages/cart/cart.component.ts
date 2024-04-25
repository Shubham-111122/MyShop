// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { CartItem } from '../../../cart-item.model'; // Update the path to your CartItem model

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    // Calculate discounted price for each item
    this.cartItems.forEach((item) => {
      const discountAmount = (item.price * item.discountPercentage) / 100;
      item.discountedPrice = item.price - discountAmount;
    });
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  calculateTotalPrice(): number {
    return this.cartService.getTotal();
  }

  checkout(): void {
    localStorage.setItem('totalAmount', `${this.cartService.getTotal()}`);
    this.router.navigate(['/payment']);
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.cartItems[index].total =
      this.cartItems[index].quantity * this.cartItems[index].price;
    // Update total in the cart service if needed
    // this.cartService.updateTotal();
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartItems[index].total =
        this.cartItems[index].quantity * this.cartItems[index].price;
      // Update total in the cart service if needed
      // this.cartService.updateTotal();
    }
  }

  clearCart(): void {
    // Clear cart items in the component
    this.cartItems = [];

    // Clear cart items in localStorage
    localStorage.removeItem('cartItems');
  }
}
