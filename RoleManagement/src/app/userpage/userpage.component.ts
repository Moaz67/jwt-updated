import { Component } from '@angular/core';
import { User } from '../user';
import { LoginserviceService } from '../loginservice.service';
import { Dashboarddata } from '../dashboarddata';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserRoleComponent } from '../user/user-role/user-role.component';
import { Roles } from '../roles';
import { RolesService } from '../roles.service';
import { RolePermissionComponent } from '../roles/role-permission/role-permission.component';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  constructor(private loginservice:LoginserviceService,private roleservice:RolesService,private router: Router,public _modalService:BsModalService){}
  token:string= localStorage.getItem('authToken')!;
userdata:User[]=[]
userid:any=0
Roles:Roles[]=[]
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
  ModalDialog(id?: number, arg?: string): void {
    debugger
    this.roleservice.GetRoles().subscribe((roles: Roles[]) => {
      this.Roles=roles
      
    });
    this.userid=this.userdata.find(userid=>userid.id===id)
    
    let createOrEditQuotationDialog: BsModalRef;
    if (id) {
      
      createOrEditQuotationDialog = this._modalService.show(
        UserRoleComponent,
        {
          class: 'modal-lg',
          backdrop: 'static',
          initialState:{
            RolesShow:this.Roles,
            username:this.userid.username
          }
          
        }
        
      );
    }
  }

}
