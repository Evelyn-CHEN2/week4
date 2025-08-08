import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-account',
  imports: [FormsModule],
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
  };
  title = 'Account Page';
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    console.log('Account component initialized with user: ');
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      console.log('No user logged in, redirecting to login page');
      this.router.navigate(['/login']);
    }
    this.user = currentUser
  }

  updateUser(event: any): void {
    event.preventDefault();
    this.authService.setCurrentUser(this.user);
    console.log('User information updated:', this.user);
    alert('User information updated successfully');
  }

}
