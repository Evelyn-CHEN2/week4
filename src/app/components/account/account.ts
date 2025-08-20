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
  
    userName: string = '';
    birthDate: string = '';
    age: number = 0;
    email: string = '';

    user: User | null = null;
  
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
    this.userName = this.user?.userName || '';
    this.birthDate = this.user?.birthDate || '';
    this.age = this.user?.age || 0;
    this.email = this.user?.email || '';
  }

  updateUser(event: any): void {
    event.preventDefault();
    const updatedUser: User = {
      ...this.user,
      userName: this.userName,
      email: this.email,
      birthDate: this.birthDate,
      age: this.age,
      pwd: this.user?.pwd || '',
      valid: this.user?.valid || false
    }
    this.authService.setCurrentUser(updatedUser);
    this.user = updatedUser; // Update the local user reference
    alert('User information updated successfully');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('User logged out', this.user);
  }

}
