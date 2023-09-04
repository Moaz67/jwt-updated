import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    DashboardcompComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,UserModule
  ]
})
export class DashboardModule { 
 
}
