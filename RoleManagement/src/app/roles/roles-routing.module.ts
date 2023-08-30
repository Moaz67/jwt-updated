import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateroleComponent } from './createrole/createrole.component';

const routes: Routes = [{path:'',component:CreateroleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
