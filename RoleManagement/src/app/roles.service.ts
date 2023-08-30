import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  token:string= localStorage.getItem('authToken')!;
  public addrole(role:Roles):Observable<Roles>{
    debugger
    return this.http.post<Roles>('https://localhost:7011/api/Role/addrole',role)
  }
  public GetRoles(role:Roles):Observable<Roles>{
    debugger
    return this.http.post<Roles>('https://localhost:7011/api/Role/addrole',role)
  }
}
