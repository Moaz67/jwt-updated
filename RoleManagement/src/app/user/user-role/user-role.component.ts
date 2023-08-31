import { Component } from '@angular/core';
import { Roles } from 'src/app/roles';
  
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent {
  constructor(){}
  RolesShow:Roles[]=[]
  username:string=""
  
}
