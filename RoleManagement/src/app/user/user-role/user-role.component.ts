import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Roles } from 'src/app/roles';
import { RolesService } from 'src/app/roles.service';
import { UserRole } from 'src/app/user-role';
  
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent {
  constructor(public modal:BsModalRef,private roleservice:RolesService){}
  RolesShow:Roles[]=[]
  username:string=""
  selectedRoles:number[]=[]
  isChecked: boolean = true;
  id:number=0
  UserRole:UserRole[]=[]
  isEditing:boolean=false

  onCheckboxChange(Roles: Roles) {
    if(Roles!=null){
      debugger
      if (Roles.selected) {
         this.selectedRoles.push(Roles.id);
      } else {
       
        const index = this.selectedRoles.indexOf(Roles.id);
        if (index > -1) {
          this.selectedRoles.splice(index, 1);
        }
      }
    }
    
  }
onUserRolecheckboxchange(roles:UserRole){
debugger
if(roles.isCheck){
  this.selectedRoles.push(roles.roleId);
}
else {
       
  const index = this.selectedRoles.indexOf(roles.roleId);
  if (index > -1) {
    this.selectedRoles.splice(index, 1);
  }
}
}
UpdateUser(){
  this.roleservice.updateUserRoles(this.id,this.selectedRoles).subscribe()
}
 
  saveroles(){
    const userRoleData = new UserRole();
    userRoleData.userId = this.id; 
    userRoleData.roleIds = this.selectedRoles;
    debugger
    this.roleservice.storeRolesagainstUser(userRoleData).subscribe()
    }
}
