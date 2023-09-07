import { Component, DebugEventListener } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Dashboarddata } from '../dashboarddata';
import { User } from '../user';
import { Router } from '@angular/router';
import { Userrolebyid } from '../userrolebyid';
import { RolesService } from '../roles.service';
import { UserRole } from '../user-role';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.css']
})
export class DashboardcompComponent {
  constructor(private loginservice:LoginserviceService,private router:Router,private roleservice:RolesService){}
  token:string=""
  userscount:number=0
  rolescount:number=0
  permissionscount:number=0
  userdata:User[]=[]
  userrole:UserRole[]=[]
  result:any
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
    this.mapUserRoles(this.userdata,name.userRoles)
    });
    }
     mapUserRoles(users: any[], userRoles: any[]) {
      this.result = users.filter((user) =>userRoles.some((userRole) => user.id === userRole.userId)
  ).map((user) => ({
    username: user.username,
    roleName: userRoles.find((userRole) => user.id === userRole.userId)?.roleName || 'No Role',
    date: user.createdDate
  }));
debugger
console.log(this.result);
    }
    transformDate(date: Date |null): string {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(date, 'yyyy-MM-dd') || ''; 
    }
    // getusers(){
    //   debugger
    //   this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
       
    //   this.userdata=name.users
    // });
    // }

}
