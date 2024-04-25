import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  totalAmount!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve totalAmount from localStorage
    const totalAmountString = localStorage.getItem('totalAmount');
    if (totalAmountString) {
      this.totalAmount = parseFloat(totalAmountString);
    }
  }

  // Simulate payment process
  submitPayment(): void {
    // Perform payment processing logic here
    // For demonstration purposes, simply clear totalAmount from localStorage
    localStorage.removeItem('totalAmount');
    // Redirect to home page after successful payment
    this.router.navigate(['/home']);
  }
}
