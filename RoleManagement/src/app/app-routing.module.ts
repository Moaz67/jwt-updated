import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { DashboardAuthGuard } from './dashboard/authentication.guard';
import { LogincomComponent } from './logincom/logincom.component';
import { AddupdateuserComponent } from './addupdateuser/addupdateuser.component';


// const routes: Routes = [ { path: '', loadChildren:()=>import ('src/app/login/login.module').then(m => m.LoginModule)},{
//   path:'',redirectTo:'login',pathMatch:'full'
// }];
const routes: Routes=[
{ path: 'login', component: LogincomComponent }, 
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) ,canActivate:[DashboardAuthGuard] },
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate:[DashboardAuthGuard] },
{ path: 'edit/:userId', component: AddupdateuserComponent },
{path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),canActivate:[DashboardAuthGuard] },
{path: 'permissions', loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule),canActivate:[DashboardAuthGuard] },
{path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
{path: 'task', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
