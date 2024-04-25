import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user data fields as needed
  };
  isEditing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Load user profile data from local storage or any other source
  }

  editProfile(): void {
    // For demonstration purposes, simply log the updated user data
    console.log('Updated user profile:', this.user);
    this.isEditing = false; // Exit editing mode
  }
}
