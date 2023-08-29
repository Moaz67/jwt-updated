import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserpageComponent } from '../userpage/userpage.component';
import { AddupdateuserComponent } from '../addupdateuser/addupdateuser.component';


@NgModule({
  declarations: [
    UserpageComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
