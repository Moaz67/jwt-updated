import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-addupdateuser',
  templateUrl: './addupdateuser.component.html',
  styleUrls: ['./addupdateuser.component.css']
})
export class AddupdateuserComponent {
  constructor(private route: ActivatedRoute,private location: Location, private http: LoginserviceService,private router:Router) {}
  isNewUser: boolean = true;
  user:User[]=[]
  users:User=new User()
  userid:number=0
  showAlert:boolean=false
  dangerAlert:boolean=false
  ngOnInit(): void {
    debugger
    const userId = parseInt(this.route.snapshot.params['userId']);
     this.userid=userId
    if (userId) {
      
      this.isNewUser = false; 
      this.http.getbyId(userId).subscribe(
        (data) => {
          this.users.username = data.username;
          this.users.password = data.password;
          
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      debugger
      this.isNewUser = true;
    }
  }
  goBack(): void {
    this.location.back();
  }
  UpdateUser(){
    debugger
    this.http.UpdateUser(this.userid,this.users.username).subscribe(
      (data) => {
          
          this.showAlert = true;
          setTimeout(() => {
            this.showAlert = false;
            this.router.navigate(['/user']);
          }, 3000);
        }
      ,
      (error) => {
        if (error.status === 409) {
          this.dangerAlert = true;
          setTimeout(() => {
            this.dangerAlert = false;
          }, 4000);
        }
      }
    );
  }
  addUser(){
    debugger
    if(this.users.password===""){
      alert('Password is required')
    }
    else{

    
    this.http.register(this.users).subscribe(
      (data) => {
        
          this.showAlert = true;
          setTimeout(() => {
            this.showAlert = false;
            this.router.navigate(['/user']);
          }, 3000);
        
      },
      (error) => {
        if (error.status === 409) {
          this.dangerAlert = true;
          setTimeout(() => {
            this.dangerAlert = false;
          }, 4000);
        }
      }
    );}
  }
}

