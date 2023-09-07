import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './roles';
import { Observable } from 'rxjs';
import { Permissions } from './permissions';
import { Roleper } from './roleper';
import { Roleperbyid } from './roleperbyid';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http:HttpClient) { }
  token:string= localStorage.getItem('authToken')!;
  public addPer(Per:Permissions):Observable<Permissions>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.post<Permissions>('https://localhost:7011/api/Permission/addper',Per,{headers})
  }
  // public GetPer():Observable<Roleperbyid>{
  //   debugger
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`
  //   });
  //   return this.http.get<Roleperbyid>('https://localhost:7011/api/Permission/permissions/0',{headers})
  // }
  public GetPer(id?:number):Observable<Roleperbyid>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    if(id==null||undefined){
      return this.http.get<Roleperbyid>('https://localhost:7011/api/Permission/permissions/0',{headers})
    }
    else{ return this.http.get<Roleperbyid>(`https://localhost:7011/api/Permission/permissions/${id}`,{headers})}
   
  }
  public deletePer(PerId: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.delete<void>(`https://localhost:7011/api/Permission/delete/${PerId}`, { headers });
  }
  public editPer(PerId: number, updatedPer: Permissions): Observable<Permissions> {
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.put<Permissions>(`https://localhost:7011/api/Permission/update/${PerId}`, updatedPer, { headers });
  }
  getPerById(PerId: number): Observable<Permissions> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get<Permissions>(`https://localhost:7011/api/Permission/${PerId}`, { headers });
  }
  storepermissionagainstrole(data:Roleper):Observable<void>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  
    return this.http.post<void>('https://localhost:7011/api/Role/addPermissionToRole',data,{ headers });
  }
  updateRolePer(roleId: number, perIds: number[]): Observable<void> {
    const requestBody = {
      roleId: roleId,
      perIds: perIds,
    };
  debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  
    return this.http.put<void>(`https://localhost:7011/api/Role/update-roles-permission`, requestBody, { headers });
  }

}
