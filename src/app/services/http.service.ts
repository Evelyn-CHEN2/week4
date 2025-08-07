import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient); //HttpClient is injected to make HTTP requests
  private server = 'http://localhost:3000';

  login(e: string, p: string) {
    return this.http.post(this.server + '/api/auth', {email: e, pwd: p}); //e is this.email, p is this.pwd
  }

}
