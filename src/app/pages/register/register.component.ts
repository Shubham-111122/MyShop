import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  pincode: string = '';
  submitted: boolean = false;

  constructor(private router: Router) {}

  register(): void {
    // Create a user object with registration data
    const user = {
      email: this.email,
      password: this.password,
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address,
      pincode: this.pincode,
    };

    // Save the user data to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Optionally, you can also set a flag indicating that the user is logged in
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
