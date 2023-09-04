import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Dashboarddata } from '../dashboarddata';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent {
  constructor(private loginservice:LoginserviceService,private router:Router){}
  token:string=""
  userscount:number=0
  rolescount:number=0
  permissionscount:number=0
  userdata:User[]=[]
  ngOnInit(): void {
    this.token= localStorage.getItem('authToken')!;
    this.getme()
  }
  getme() {
    this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
    debugger
    this.userscount=name.userCount
    this.rolescount=name.roleCount
    this.permissionscount=name.permissionCount
    this.userdata=name.users
    });
    }
    // getusers(){
    //   debugger
    //   this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
       
    //   this.userdata=name.users
    // });
    // }

}
