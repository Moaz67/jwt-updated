import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule
  ]
})
export class LoginModule { }
