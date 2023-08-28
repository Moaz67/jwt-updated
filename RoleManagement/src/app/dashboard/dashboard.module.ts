import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';


@NgModule({
  declarations: [
    DashboardcompComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { 
 
}
