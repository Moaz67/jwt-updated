import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './roles';
import { Observable } from 'rxjs';
import { UserRole } from './user-role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  token:string= localStorage.getItem('authToken')!;
  public addrole(role:Roles):Observable<Roles>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.post<Roles>('https://localhost:7011/api/Role/addrole',role,{headers})
  }
  public GetRoles():Observable<Roles[]>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get<Roles[]>('https://localhost:7011/api/Role/getdata',{headers})
  }
  public deleteRole(roleId: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.delete<void>(`https://localhost:7011/api/Role/delete/${roleId}`, { headers });
  }
  public editRole(roleId: number, updatedRole: Roles): Observable<Roles> {
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.put<Roles>(`https://localhost:7011/api/Role/update/${roleId}`, updatedRole, { headers });
  }
  getRoleById(roleId: number): Observable<Roles> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get<Roles>(`https://localhost:7011/api/Role/${roleId}`, { headers });
  }
  storeRolesagainstUser(data:UserRole):Observable<void>{

    debugger

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  
    return this.http.post<void>(`https://localhost:7011/api/User/addRolestoUsers`, data, { headers });

  }
}
