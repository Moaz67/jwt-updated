import { Component } from '@angular/core';
import { Roles } from 'src/app/roles';
import { RolesService } from 'src/app/roles.service';

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css']
})
export class CreateroleComponent {
  constructor(private http:RolesService){}
isedit:boolean=false
role:Roles=new Roles()
roles:Roles[]=[]
editingRole:Roles=new Roles()
ngOnInit(): void {
  this.get()
  }
add(){
this.http.addrole(this.role).subscribe()
this.get()
}
get(){
  this.http.GetRoles().subscribe((name: Roles[]) => {
      debugger
    this.roles=name
  });
}
editUser(userId: number): void {
  debugger
  this.isedit=true
  this.http.editRole(userId,this.editingRole).subscribe()
  this.get()
}
deleteUser(id:number){
  debugger
   this.http.deleteRole(id).subscribe()
   this.get()
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
}
