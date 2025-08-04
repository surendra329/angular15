import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
public loginObj = {
    name: '',
    password: ''
  };
  private localStorage: any = localStorage;

constructor(private routes:Router,private authService:AuthService){}
  ngOnInit(){
  }

  loginForm(){

    this.loginObj.name = this.loginObj.name.trim();
    this.loginObj.password = this.loginObj.password.trim();
    
    if(this.loginObj.name !== '' && this.loginObj.password !== ''){
        // alert('Please enter valid credentials');
        this.localStorage.setItem('token','Active');
        this.authService.setUsername(this.loginObj.name);
        this.routes.navigate(['./dashboard']);
      }
  }

}
