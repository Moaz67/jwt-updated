import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from '../userpage/userpage.component';
import { AddupdateuserComponent } from '../addupdateuser/addupdateuser.component';
const routes: Routes = [{path: '', component: UserpageComponent },{ path: 'add', component: AddupdateuserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
