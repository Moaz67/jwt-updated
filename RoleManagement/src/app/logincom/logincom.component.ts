import { Component,Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
import { LoginserviceService } from 'src/app/loginservice.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-logincom',
  templateUrl: './logincom.component.html',
  styleUrls: ['./logincom.component.css']
})
export class LogincomComponent {
  @Output() loginEvent: EventEmitter<void> = new EventEmitter<void>();
  user = new User();
  showAlert:boolean=false
  registrationalert:boolean=false
  successlogin:boolean=false
  constructor(private userlogin: LoginserviceService,private router:Router) {}
  register(user:User) {
    debugger
  this.userlogin.register(user).subscribe(()=>{
    this.registrationalert=true;
    setTimeout(() => {
      this.registrationalert = false;
      
    }, 4000);
  });
  // this.router.navigate(['/register']);
  }
  login(user: User) {
   debugger
  this.userlogin.login(user).subscribe((token: string) => { localStorage.setItem('authToken', token);
  this.successlogin=true;
  if(this.successlogin==true){
    this.loginEvent.emit();
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
