import { Component, OnInit } from '@angular/core';
import { products } from '../../../products'; // Assuming products are imported from a file
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../cart-item.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    const productId = localStorage.getItem('productId');
    if (productId) {
      this.product = products.find((p) => p.id.toString() === productId);
    }
  }

  addToCart(product: any) {
    const newItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      discountPercentage: product.discountPercentage || 0,
      quantity: 1,
      total: product.price,
    };
    this.cartService.addItem(newItem);
    this.router.navigate(['/cart']);
  }

  buyNow(product: any) {
    const newItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      discountPercentage: product.discountPercentage || 0,
      quantity: 1,
      total: product.price,
    };
    this.cartService.addItem(newItem);
    this.router.navigate(['/payment']);
  }
}
