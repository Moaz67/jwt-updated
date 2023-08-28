import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompComponent } from '../dashboardcomp/dashboardcomp.component';
import { DashboardAuthGuard } from './authentication.guard';

const routes: Routes = [
  
  {
    
    path: '',
    component: DashboardcompComponent,
    canActivate: [DashboardAuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
