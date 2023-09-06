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
import { Userrolebyid } from '../userrolebyid';
import { UserRole } from '../user-role';
import { ClaimserviceService } from '../claimservice.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  constructor(private loginservice:LoginserviceService,private roleservice:RolesService,private router: Router,public _modalService:BsModalService,public modal:BsModalRef,private claim:ClaimserviceService){}
  token:string= localStorage.getItem('authToken')!;
userdata:User[]=[]
userid:any=0
Roles:Roles[]=[]
Userrole:UserRole[]=[]
data:any
showAlert:boolean=false
  ngOnInit(): void {
    debugger
  this.getusers()
  
}
  getusers(){
    debugger
    this.loginservice.getMe(this.token).subscribe((name: Dashboarddata) => {
     
    this.userdata=name.users
  });
  this.getclaim()
  }
  getclaim(){
    debugger
    
    const claims = this.claim.getClaims();
    if (claims) {
      this.data=claims.Permission
    }
  }
  containsString(str:string):boolean{
    debugger
    return this.data.includes(str)
  }
  editUser(userId: number): void {
    debugger
    this.router.navigate(['edit', userId]);
  }
  deleteUser(id:number){
    debugger
     this.loginservice.DeleteUser(id).subscribe(()=>{
      this.showAlert=true;
      setTimeout(() => {
        this.showAlert = false;
        this.getusers()
      }, 4000);
     })
  }
  ModalDialog(id?: number, arg?: string): void {
    debugger
    this.roleservice.GetRoles(id).subscribe((roles: Userrolebyid) => {
      debugger
      this.Roles=roles.roles
      this.Userrole=roles.userRoles
      let createOrEditQuotationDialog: BsModalRef;
      if (id) {
        this.userid=this.userdata.find(userid=>userid.id===id)
        createOrEditQuotationDialog = this._modalService.show(
          UserRoleComponent,
          {
            class: 'modal-sm',
            backdrop: 'static',
            initialState:{
              RolesShow:this.Roles,
              username:this.userid.username,
              id:id,
              UserRole:this.Userrole,
              selectedRoles:this.Userrole.filter((role) => role.isCheck).map((role) => role.roleId),
              isEditing:true
            }
            
          }
          
        );
      }
      
    });
    
    
   
  }

}
