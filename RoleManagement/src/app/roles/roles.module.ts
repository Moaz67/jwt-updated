import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { CreateroleComponent } from './createrole/createrole.component';
import { FormsModule } from '@angular/forms';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';
import { UserRoleComponent } from '../user/user-role/user-role.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    CreateroleComponent,
    RolePermissionComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
   UserModule
  ]
})
export class RolesModule { }
