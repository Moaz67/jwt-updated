import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    debugger
    const token = localStorage.getItem('authToken');
   debugger
    return token !== null;
  }
}
