import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators and FormBuilder
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Convenience getter for easy access to form fields
  get formControls() {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;

    // If form is invalid, do nothing
    if (this.loginForm.invalid) {
      return;
    }

    // Retrieve email value from the form controls
    const email = this.loginForm.value.email;

    // Perform login logic here

    // After successful login, set isLoggedIn to true and store email in user object in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ email }));
    // For demonstration purposes, navigate to the home page
    this.router.navigate(['/home']);
  }
}
