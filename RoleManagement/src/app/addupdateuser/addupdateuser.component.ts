import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addupdateuser',
  templateUrl: './addupdateuser.component.html',
  styleUrls: ['./addupdateuser.component.css']
})
export class AddupdateuserComponent {
  constructor(private route: ActivatedRoute, private http: LoginserviceService) {}
  isNewUser: boolean = true;
  user:User[]=[]
  users:User=new User()
  userid:number=0
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
  UpdateUser(){
    debugger
    this.http.UpdateUser(this.userid,this.users.username).subscribe(
      (data) => {
        
        
      })
  }
  addUser(){
    debugger
    this.http.register(this.users).subscribe(
      (data) => {
        
        
      })
  }
}

