import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreatetaskComponent,
    DeletemodalComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,FormsModule,BrowserModule,HttpClientModule
  ]
})
export class TodoListModule { }
