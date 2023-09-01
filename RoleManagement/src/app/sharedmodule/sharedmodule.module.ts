import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedmoduleRoutingModule } from './sharedmodule-routing.module';
import { RolePermissionComponent } from '../roles/role-permission/role-permission.component';


@NgModule({
  declarations: [
    // RolePermissionComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule
  ],
  exports: [
    // RolePermissionComponent
  ],
})
export class SharedmoduleModule { }
