import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'food delivery';
   isSidebarOpen = true;

  userLogin: string = localStorage.getItem('token') || 'Papa Rao';
  private localStorage: any = localStorage;
  constructor(private authService: AuthService,private router:Router) {}
  ngOnInit(): void {
    console.log('🚀 AppComponent initialized',localStorage);
    if (localStorage.getItem('token')) {
      this.userLogin = 'Papa Rao';
    }else {
      this.userLogin = 'Log Out';
    }

     this.authService.username$.subscribe(name => {
       console.log('Received username in AppComponent:', name);
      this.userLogin = name;
    },error=> {
      this.userLogin = 'Log Out';
      console.error('Error fetching username:', error);
    }); 

  }
  simulateLogin() {
    this.authService.setUsername('TestUser');
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logOut(){
      if(localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.authService.setUsername('Log Out');
      this.localStorage.removeItem('userName');
      this.localStorage.setItem('userName','Logout');
      this.router.navigate(['./login']);
      return;
    }
  }
}

