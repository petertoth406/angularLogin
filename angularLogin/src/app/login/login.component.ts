import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../commonServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private auth: AuthService
  ) { }

  user: User = new User();


  ngOnInit(): void {
    console.log(this.user)
  }

  login():void{
    console.log(this.user)
    this.loginService.login(this.user).subscribe(
      res=>
      {
        if(res.status == 200){
          //alert("login");
          //localStorage.setItem("token", res.body.token)
          this.auth.logUserIn(res.body.token)
          this.router.navigate(["home"])
        }
        console.log(res)
      },
      err=>{
        alert(err.error.message)
        console.error(err)
      }
      );
  }

}
