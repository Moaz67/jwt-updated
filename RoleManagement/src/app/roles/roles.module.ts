import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { CreateroleComponent } from './createrole/createrole.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateroleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,FormsModule
  ]
})
export class RolesModule { }
