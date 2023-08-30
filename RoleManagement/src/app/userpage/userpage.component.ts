import { Component } from '@angular/core';
import { User } from '../user';
import { LoginserviceService } from '../loginservice.service';
import { Dashboarddata } from '../dashboarddata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  constructor(private loginservice:LoginserviceService,private router: Router){}
  token:string= localStorage.getItem('authToken')!;
userdata:User[]=[]
  ngOnInit(): void {
  this.getusers()
  }
  getusers(){
    this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
      
    this.userdata=name.users
  });
  }
  editUser(userId: number): void {
    debugger
    this.router.navigate(['/user/edit', userId]);
  }
  deleteUser(id:number){
    debugger
     this.loginservice.DeleteUser(id).subscribe()
  }

}
