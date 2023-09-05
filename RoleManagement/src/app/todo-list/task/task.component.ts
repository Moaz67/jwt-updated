import { Component,OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/taskservice.service';
import { Task1 } from 'src/app/task1';
import { Response } from 'src/app/response';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreatetaskComponent } from '../createtask/createtask.component';
import { DatePipe } from '@angular/common';
import { Taskstatus } from 'src/app/taskstatus';
import { DeletemodalComponent } from '../deletemodal/deletemodal.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  searchText: string = '';
  Taskstatus = Taskstatus;
  Task:Task1[]=[];
  PageNumbers:number[]=[]
  TotalPages:number=0
  showAlert: boolean = false;
  constructor(private taskService: TaskserviceService, public _modalService:BsModalService) {}
  ngOnInit(): void {
    // this.getResponse(1); 
  }
  // getResponse(page: number=1): void {
  //   if(this.searchText===null|| this.searchText === ""){
  //     this.taskService.getResponse(page, 5)
  //     .subscribe(
  //       (response:Response) => {
  //         this.Task=response.items;
  //         this.PageNumbers = Array.from({ length: response.totalPages }, (_, index) => index + 1);
          
  //       })
  //   }
  //   else{
      
  //       this.taskService.searchResult(this.searchText,page, 1)
  //   .subscribe(
  //     (response:Response) => {
  //       this.Task=response.items;
  //       this.PageNumbers = Array.from({ length: response.totalPages }, (_, index) => index + 1);
        
  //     })

  //   }
    
      
      
  // }
  search(page:number):void{
    
  }
  deleteTask(taskId: number) {
     
   
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        // this.getResponse(1); 
      })}

  Add(id?:number): void {
    this.showCreateOrEditPropertyTypeModalDialogg(id);
  }
  showCreateOrEditPropertyTypeModalDialogg(id?: number, arg?: string): void {
    debugger
    let bsmodal: BsModalRef;
   if(!id){
            bsmodal = this._modalService.show(
          CreatetaskComponent,
          {
            class: 'modal-md',
            backdrop: 'static',
            
          }
        );
    }
    else{
      bsmodal = this._modalService.show(
       CreatetaskComponent,
       {
         class: 'modal-md',
         backdrop: 'static',
         initialState: {
         id: id,
         isEditing:true
         }
       }
     );
 }
 bsmodal.content.Done.subscribe(() => {
  this.showAlert = true;
  setTimeout(() => {
    this.showAlert = false;
    // this.getResponse(1)
  }, 2000);

});
}
showdeletemodal(id:number):void{
  debugger
  let deletemodal:BsModalRef
deletemodal = this._modalService.show(
        DeletemodalComponent,
        {
          class: 'modal-sm',
          backdrop: 'static',

        }
      );
      deletemodal.content.Yes.subscribe((response:any) => {
        debugger
        if(response=="Yes"&& id !== undefined){
           this.deleteTask(id);
        }
        deletemodal.hide()
      });
}
  transformDate(date: Date |null): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yyyy-MM-dd') || ''; 
  }
  
    
}
