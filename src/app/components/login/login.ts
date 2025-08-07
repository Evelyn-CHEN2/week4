import { Component, OnInit, inject } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  title = 'Login';
  email: string = '';
  pwd: string = '';
  errorMsg: string = '';
  constructor(private router: Router) {} 
  private http = inject(HttpService);
  
  ngOnInit(): void {
    console.log('Login component initialized');
    // Check if the user is already logged in
    // and redirect them to the account page if they are.
    // For example:
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/account']);
    // }
  }

  login(event:any) {
    this.errorMsg = '';
    event.preventDefault();
    // Request body{email, pwd} is sent through HTTP POST th the server
    //.subscribe() is used to listen to response from the server
    //this.email bounds to class Login property and updated by ngModel
    this.http.login(this.email, this.pwd).subscribe(
      {
        next: (user:any) => {
          if (user.valid ===true) {
            this.router.navigate(['/account']);
          } else {
            this.errorMsg = 'Invalid email or password';
          }
        },
        error: (err:any) => {
          console.error('Login error:', err);
          this.errorMsg = 'An error occurred during login. Please try again later.';
        },
        complete: () => {
          console.log('Login request completed');
        }
      })
  }


}
