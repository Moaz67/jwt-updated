import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PermissionService } from 'src/app/permission.service';
import { Permissions } from 'src/app/permissions';
import { Roleper } from 'src/app/roleper';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.css']
})
export class RolePermissionComponent {
  constructor(public modal:BsModalRef,private PermisionService:PermissionService){}
  PerShow:Permissions[]=[]
  selectedPermissions: number[] = [];
  id:number=0
  onCheckboxChange(permission: Permissions) {
    debugger
    if (permission.selected) {
       this.selectedPermissions.push(permission.id);
    } else {
     
      const index = this.selectedPermissions.indexOf(permission.id);
      if (index > -1) {
        this.selectedPermissions.splice(index, 1);
      }
    }
  }
  savepermission(){
    const userRoleData = new Roleper();
    userRoleData.roleId = this.id; 
    userRoleData.perIds = this.selectedPermissions;
this.PermisionService.storepermissionagainstrole(userRoleData).subscribe()
  }
}
