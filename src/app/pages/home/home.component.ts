import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { products } from '../../../products';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('cartAlert') cartAlert: ElementRef | undefined;

  products: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;
  showBackToTop: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 100; // Show the button when scrolled down
  }

  loadProducts() {
    // Assuming products is an array of all products
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, products.length);
    this.products = products.slice(startIndex, endIndex);
  }

  nextPage() {
    const totalPagesCount = this.totalPages().length;
    if (this.currentPage < totalPagesCount) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  totalPages(): number[] {
    return Array(Math.ceil(products.length / this.itemsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addToCart(event: Event, product: any): void {
    event.preventDefault(); // Prevent the default behavior
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
      discountPercentage: product.discountPercentage || 0,
      total: product.price, // Calculate total price for the initial quantity
    };
    this.cartService.addItem(cartItem);
    // Show the alert
    this.showCartAlert();
  }

  redirectToProductPage(event: MouseEvent, product: any): void {
    // Check if the user clicked on the Add to Cart button, if so, do not redirect
    if ((event.target as HTMLElement).tagName !== 'BUTTON') {
      // Store the product ID in local storage
      localStorage.setItem('productId', product.id);

      // Navigate to the product page
      this.router.navigate(['/product']);
    }
  }

  logout(): void {
    // Perform logout actions
    this.router.navigate(['/home']);
  }

  showCartAlert(): void {
    // Check if cartAlert is defined before accessing nativeElement
    if (this.cartAlert) {
      // Show the alert
      this.cartAlert.nativeElement.style.display = 'block';
      // Hide the alert after 3 seconds
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    }
  }

  closeAlert(): void {
    // Check if cartAlert is defined before accessing nativeElement
    if (this.cartAlert) {
      // Hide the alert
      this.cartAlert.nativeElement.style.display = 'none';
    }
  }
}
