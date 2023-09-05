import { Component } from '@angular/core';
import { ClaimserviceService } from 'src/app/claimservice.service';
import { PermissionService } from 'src/app/permission.service';
import { Permissions } from 'src/app/permissions';
import { Roleper } from 'src/app/roleper';
import { Roleperbyid } from 'src/app/roleperbyid';

@Component({
  selector: 'app-managepermissions',
  templateUrl: './managepermissions.component.html',
  styleUrls: ['./managepermissions.component.css']
})
export class ManagepermissionsComponent {
  constructor(private http:PermissionService,private claim:ClaimserviceService){}
  isedit:boolean=false
  Permission:Permissions=new Permissions()
  Permissions:Permissions[]=[]
  editingPer:Permissions=new Permissions()
  Peragainstrole:Roleper[]=[]
  data:any
  ngOnInit(): void {
    this.get()
    
    }

  add(){
  this.http.addPer(this.Permission).subscribe(()=>{
    this.get()
   })

  }
  get(){
    this.http.GetPer().subscribe((name: Roleperbyid) => {
        debugger
      this.Permissions=name.permissions
    });
    this.getclaim()
  }
  editUser(userId: number): void {
    debugger
    this.isedit=true
    this.http.editPer(userId,this.editingPer).subscribe(()=>{
      this.get()
     })
    
  }
  getclaim(){
    debugger
    this.claim.getClaims()
    const claims = this.claim.getClaims();
    if (claims) {
      this.data=claims.Permission
    }
  }
  containsString(str:string):boolean{
    debugger
    return this.data.includes(str)
  }
  deleteUser(id:number){
    debugger
     this.http.deletePer(id).subscribe(()=>{
      this.get()
     })
     
  }
  oneditclick(id:number){
  debugger
  this.http.getPerById(id).subscribe(
    (role: Permissions) => {
      this.isedit = true;
      this.editingPer.name=role.name
      this.editingPer.id=role.id
  })
  }
  cancelEdit() {
    this.editingPer = new Permissions(); 
    this.isedit = false; 
  }
  onPerInputChange(event: any) {
   debugger
    if (this.isedit) {
      this.editingPer.name = event.target.value;
    }
  }
}
