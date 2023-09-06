import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TaskserviceService } from '../taskservice.service';
//import { Response } from '../response';


@NgModule({
  declarations: [
    CreatetaskComponent,
    DeletemodalComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,FormsModule,HttpClientModule
  ],
  providers:[BsModalService,DatePipe,TaskserviceService]
})
export class TodoListModule { }
