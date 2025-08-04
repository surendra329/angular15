import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router,private authService:AuthService){}
  test(){
    console.log('tesdt');
    if(localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.authService.setUsername('Log Out');
      this.router.navigate(['./login']);
      return;
    }
  }
  ngOnInit(){
    localStorage.setItem('token','Active');
  }

  goToLunch() {
    this.router.navigate(['/lunch'], {
      queryParams: {
        meal: 'veg',
        time: 'noon'
      }
    });
  }
  

}