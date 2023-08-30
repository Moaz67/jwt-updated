import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardAuthGuard } from './dashboard/authentication.guard';
import { AuthService } from './dashboard/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  isAuthenticated: boolean = false; 
  successlogin: boolean = false;
  constructor(private auth:AuthService){
  }

  title = 'RoleManagement';
 onLogin(){
    
    debugger
      this.isAuthenticated = this.auth.isAuthenticated();
      this.successlogin = true;
  }
  logout(){
    debugger
    localStorage.removeItem('authToken');
  }
} 
