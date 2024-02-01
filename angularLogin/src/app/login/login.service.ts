import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl:string = "https://dummyjson.com/auth/login";

  constructor(
    private http: HttpClient
  ) {

    /*fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })*/
   }

   login(user: User):Observable<any>{
      return this.http.post<any>(this.loginUrl, user, {headers: { 'Content-Type': 'application/json' }, observe: "response"})
   }
}
