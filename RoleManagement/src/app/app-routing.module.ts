import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

// const routes: Routes = [ { path: '', loadChildren:()=>import ('src/app/login/login.module').then(m => m.LoginModule)},{
//   path:'',redirectTo:'login',pathMatch:'full'
// }];
const routes: Routes=[
{path: '',component:LoginpageComponent},
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
