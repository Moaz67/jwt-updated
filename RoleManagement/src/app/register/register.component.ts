import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:LoginserviceService,private router:Router){}
  newuser = new User();
  showAlert:boolean=false
  register(user: User) {
     
    this.http.register(user).subscribe(()=>{
      this.showAlert=true
      setTimeout(() => {
        this.showAlert = false;
        this.router.navigate(['login'])
      }, 4000);
      
    });
    }
}
