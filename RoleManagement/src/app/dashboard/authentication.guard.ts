// dashboard-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    debugger
    if (this.authService.isAuthenticated()) {
      return true;
      
    }
    this.router.navigate(['/login']); 
    return false;
  }
}
