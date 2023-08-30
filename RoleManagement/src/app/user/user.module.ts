import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserpageComponent } from '../userpage/userpage.component';
import { AddupdateuserComponent } from '../addupdateuser/addupdateuser.component';
import { EdituserComponent } from '../edituser/edituser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserpageComponent,
    EdituserComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule
  ]
})
export class UserModule { }
