import { Component } from '@angular/core';
import { Roles } from 'src/app/roles';
import { RolesService } from 'src/app/roles.service';
import { FormsModule } from '@angular/forms';
import { PermissionService } from 'src/app/permission.service';
import { Permissions } from 'src/app/permissions';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RolePermissionComponent } from '../role-permission/role-permission.component';
import { Userrolebyid } from 'src/app/userrolebyid';
import { Roleper } from 'src/app/roleper';
import { Roleperbyid } from 'src/app/roleperbyid';
import { ClaimserviceService } from 'src/app/claimservice.service';


@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent {
  constructor(private http:RolesService,private permission:PermissionService,public modal:BsModalRef,public _modalService:BsModalService,private claim:ClaimserviceService){}
isedit:boolean=false
role:Roles=new Roles()
roles:Roles[]=[]
Permission:Permissions[]=[]
editingRole:Roles=new Roles()
Peragainstrole:Roleper[]=[]
selectedPermissions:number[]=[]
data:any
ngOnInit(): void {
  this.get()
  }
add(){
this.http.addrole(this.role).subscribe(()=>{
  this.get()
 })

}
get(){
  this.http.GetRoles().subscribe((name: Userrolebyid) => {
      debugger
    this.roles=name.roles
  });
  this.getclaim()
}
editUser(userId: number): void {
  debugger
  this.isedit=true
  this.http.editRole(userId,this.editingRole).subscribe(()=>{
    this.get()
   })
 
}
deleteUser(id:number){
  debugger
   this.http.deleteRole(id).subscribe(()=>{
    this.get()
   })
  }
oneditclick(id:number){
debugger
this.http.getRoleById(id).subscribe(
  (role: Roles) => {
    this.isedit = true;
    this.editingRole.name=role.name
    this.editingRole.id=role.id
})
}
cancelEdit() {
  this.editingRole = new Roles(); 
  this.isedit = false; 
}
onRoleInputChange(event: any) {
 debugger
  if (this.isedit) {
    this.editingRole.name = event.target.value;
  }
}
getclaim(){
  debugger
 
  const claims = this.claim.getClaims();
  if (claims) {
    this.data=claims.Permission
  }
}
containsString(str:string):boolean{
 
  return this.data.includes(str)
}
ModalDialog(id?: number, arg?: string): void {
  debugger
  this.permission.GetPer(id).subscribe((Per: Roleperbyid) => {
    this.Permission=Per.permissions
    this.Peragainstrole=Per.rolePer
    let createOrEditQuotationDialog: BsModalRef;
    if (id) {
      // this.userid=this.userdata.find(userid=>userid.id===id)
      createOrEditQuotationDialog = this._modalService.show(
        RolePermissionComponent,
        {
          class: 'modal-sm',
          backdrop: 'static',
          initialState:{
            PerShow:this.Permission,
            id:id,
            Peragainstrole:Per.rolePer,
            isEditing:true,
            selectedPermissions:this.Peragainstrole.filter((role) => role.isCheck).map((role) => role.permissionId),
          }
          
        }
        
      );
    }
    
  });
  
  
 
}
}
