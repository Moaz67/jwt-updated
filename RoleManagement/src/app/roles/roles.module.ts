import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { CreateroleComponent } from './createrole/createrole.component';
import { FormsModule } from '@angular/forms';
import { RolePermissionComponent } from './role-permission/role-permission.component';


@NgModule({
  declarations: [
    CreateroleComponent,
    RolePermissionComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,FormsModule
  ]
})
export class RolesModule { }
