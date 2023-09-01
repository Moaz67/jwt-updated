import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserpageComponent } from '../userpage/userpage.component';
import { AddupdateuserComponent } from '../addupdateuser/addupdateuser.component';
import { EdituserComponent } from '../edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import { UserRoleComponent } from './user-role/user-role.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RolePermissionComponent } from '../roles/role-permission/role-permission.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { RolesModule } from '../roles/roles.module';


@NgModule({
  declarations: [
    UserpageComponent,
    EdituserComponent,
    UserRoleComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
   UserRoutingModule
  ],
  providers: [
    BsModalService
  ],
})
export class UserModule { }
