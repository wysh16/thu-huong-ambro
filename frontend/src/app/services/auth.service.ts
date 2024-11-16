import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  http = inject(HttpClient);

  register(name: string, email: string, password: string) {
    return this.http.post(environment.apiUrl + '/auth/register', {
      name,
      email,
      password,
    });
  }

  login(email: string, password: string) {
    return this.http.post(environment.apiUrl + '/auth/login', {
      email,
      password,
    });
  }

  get userName() {
    let userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }

  get isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user && user.role === 'admin';
  }
}
