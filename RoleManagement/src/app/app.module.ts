import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AddupdateuserComponent } from './addupdateuser/addupdateuser.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogincomComponent } from './logincom/logincom.component';

//import { SidebarpanelComponent } from './sidebarpanel/sidebarpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogincomComponent,
    AddupdateuserComponent
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
