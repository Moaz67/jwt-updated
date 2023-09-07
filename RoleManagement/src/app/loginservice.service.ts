import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboarddata } from './dashboarddata';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  
  constructor(private http:HttpClient) { }
  token:string= localStorage.getItem('authToken')!;
  public register(user:User):Observable<any>{
    return this.http.post<any>('https://localhost:7011/api/Auth/register',user)
  }
  public login(user: User): Observable<string> {
    return this.http.post('https://localhost:7011/api/Auth/login', user, {
    responseType: 'text',
    });
  }
  public getMe(token:string): Observable<Dashboarddata> {
    debugger
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Dashboarddata>('https://localhost:7011/api/User/getdata',{headers});}
    public getbyId(Id:number): Observable<User> {
      debugger
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      });
      return this.http.get<User>(`https://localhost:7011/api/User/${Id}`);
      ;}
      public UpdateUser(Id:number,username:string): Observable<User> {
        debugger
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        });
        return this.http.put<User>(`https://localhost:7011/api/User/update${Id}?username=${username}`, { headers });
        ;}
        public DeleteUser(Id:number): Observable<User> {
          debugger
          const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`
          });
          return this.http.delete<User>(`https://localhost:7011/api/User/delete${Id}`, { headers });
          ;}
}
