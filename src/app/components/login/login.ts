import { Component, OnInit } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  title = 'Login';
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    throw new Error('Login method not implemented.');
  }

  login(event:any) {
    console.log('Logging in with email: ', this.email);
    event.preventDefault();
    const users = [
      { email: 'admin@com.au', password: '123'},
      { email: 'user@com.au', password: '123'},
      { email: 'email@com.au', password: '123'}
  ]
    const loggedUser = users.find(user => user.email === this.email && user.password === this.password);
    if (loggedUser) {
      console.log('Login successful');
      this.router.navigate(['/account']);
    } else {
      console.log('Login failed');
      this.errorMsg = 'Invalid email or password';
    }
  }


}
