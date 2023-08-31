import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './roles';
import { Observable } from 'rxjs';
import { Permissions } from './permissions';

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
  public GetPer():Observable<Permissions[]>{
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get<Permissions[]>('https://localhost:7011/api/Permission/getdata',{headers})
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
}
