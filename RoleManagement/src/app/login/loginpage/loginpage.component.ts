import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { LoginserviceService } from 'src/app/loginservice.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  user = new User();
  showAlert:boolean=false
  successlogin:boolean=false
  constructor(private userlogin: LoginserviceService,private router:Router) {}
  register(user: User) {
   
  this.userlogin.register(user).subscribe();
  }
  login(user: User) {
   
  this.userlogin.login(user).subscribe((token: string) => { localStorage.setItem('authToken', token);
  this.successlogin=true;
  if(this.successlogin==true){
    this.router.navigate(['/dashboard']);
  }
  },(error) => {
    if (error.status === 400) {
      this.showAlert=true;
      setTimeout(() => {
        this.showAlert = false;
        
      }, 4000);
    }});
  
  }
  
}
