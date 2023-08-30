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
add(){
this.http.addrole(this.role).subscribe()
}
get(){
  
}
}
