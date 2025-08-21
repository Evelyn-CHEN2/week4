import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account implements OnInit {
  user: User = {
    userName: '',
    birthDate: '',
    age: 0,
    email: '',
    pwd: '',
    valid: false
  }
  
  title = 'Account Page';
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    console.log('Account component initialized with user: ');
    const currentUser = this.authService.getCurrentUser();
    console.log('Current user:', currentUser);
    if (!currentUser) {
      console.log('No user logged in, redirecting to login page');
      this.router.navigate(['/login']);
    }
    this.user = currentUser
  }

  updateUser(event: any): void {
    event.preventDefault();
    const updatedUser: User = {
      userName: this.user.userName,
      email: this.user.email,
      birthDate: this.user.birthDate,
      age: this.user.age,
      pwd: this.user?.pwd,
      valid: this.user?.valid
    }
    this.authService.setCurrentUser(updatedUser);
    this.user = updatedUser; // Update the UI with the updated user information
    alert('User information updated successfully');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('User logged out', this.user);
  }

}
