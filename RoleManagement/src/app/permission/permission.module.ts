import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { ManagepermissionsComponent } from './managepermissions/managepermissions.component';
import { FormsModule } from '@angular/forms';
import { RolesModule } from '../roles/roles.module';



@NgModule({
  declarations: [
    ManagepermissionsComponent,
   
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,FormsModule,RolesModule
  ]
})
export class PermissionModule { }
