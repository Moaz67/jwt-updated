import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  public register(user:User):Observable<any>{
    return this.http.post<any>('https://localhost:7011/api/Auth/register',user)
  }
  public login(user: User): Observable<string> {
    return this.http.post('https://localhost:7011/api/Auth/login', user, {
    responseType: 'text',
    });
  }
  public getMe(token:string): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get('https://localhost:7011/WeatherForecast',{headers,responseType:'text'});}
}
