import { Component } from '@angular/core';
import { User } from '../user';
import { LoginserviceService } from '../loginservice.service';
import { Dashboarddata } from '../dashboarddata';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  constructor(private loginservice:LoginserviceService){}
  token:string= localStorage.getItem('authToken')!;
userdata:User[]=[]
  ngOnInit(): void {
  this.getusers()
  }
  getusers(){
    this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
      debugger
    this.userdata=name.users
  });
  }


}
