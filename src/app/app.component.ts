import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'food delivery';
  userLogin: string = localStorage.getItem('token') || 'Papa Rao';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    console.log('🚀 AppComponent initialized');
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
}

