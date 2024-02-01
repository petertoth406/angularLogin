import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logUserIn(token: string){
    localStorage.setItem("token", token)
  }
  logUserOut(){
    localStorage.clear()
    this.router.navigate(["login"])
  }

  isLoggedIn(){
    //Token validáció

    let token = localStorage.getItem("token")
    return token ? true : false; 
  }

  constructor(private router: Router) { }
}
