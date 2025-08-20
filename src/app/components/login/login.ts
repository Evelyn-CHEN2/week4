import { Component, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common'; //CommonModule offers *ngIf, *ngFor
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  title = 'Login';
  email: string = '';
  pwd: string = '';
  errorMsg: string = '';
  private router = inject(Router); // Router is injected to navigate to different routes
  private authService = inject(AuthService); 
  
  ngOnInit(): void {
    console.log('Login component initialized');
    const user = this.authService.getCurrentUser();
    if (user) {
      console.log('User logged in: ', user)
      this.router.navigate(['/account']);
    }
  }

  login(event:any) {
    this.errorMsg = '';
    event.preventDefault();
  
    if (this.email === '' || this.pwd === '') {                   //.subscribe() is used to listen to response from the server
                                                                  //this.email bounds to class Login property and updated by ngModel
      this.errorMsg = 'Please enter both email and password';
      return; // Exit the function if validation fails
    }
    this.authService.login(this.email, this.pwd).subscribe(
      {
        next: (user:any) => {
          if (user.valid === true) {
            this.authService.setCurrentUser(user);
            this.router.navigate(['/account']);
          } else {
            this.errorMsg = 'Invalid email or password';
          }
        },
        error: (err:any) => { 
          console.log('Login error:', err);
          this.errorMsg = 'An error occurred during login';
        },
        complete: () => {
          console.log('Login request completed');
        }
      })
  }


}
