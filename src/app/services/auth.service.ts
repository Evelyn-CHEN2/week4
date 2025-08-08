import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); // HttpClient is injected to make HTTP requests
  private router = inject(Router); // Router is injected to navigate to different routes
  private server = 'http://localhost:3000'; // Base URL for the server

  login(e: string, p: string): Observable<User>{  //e refers to this.email, p refers to this.pwd (value from login form)  //Observable<User> tells callers the response type is User
    return this.http.post<User>(this.server + '/api/login', {email: e, pwd: p});  //http.post<User> makes request with body (email, pwd) and expects a response of type User
  }

  setCurrentUser(newUser: User): void {
    localStorage.setItem('currentUser', JSON.stringify(newUser)); // localStorage only stores strings
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null; // Parse the string back to an object or return null if not found
  }

  isLoggedIn(): boolean {
    const user = this.getCurrentUser();
    return user ? true : false; 
  } 

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login'); // this.router.navigate(['/login])
  }
  
}
