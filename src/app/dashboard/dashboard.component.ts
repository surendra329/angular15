import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
   animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class DashboardComponent {

  constructor(private router:Router,private authService:AuthService){}
  test(){
    // console.log('tesdt');
    if(localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.authService.setUsername('Log Out');
      this.router.navigate(['./login']);
      return;
    }
  }
  ngOnInit(){
    localStorage.setItem('token','Active');
    localStorage.setItem('userName','userName');
  }
  gotodiet(){
    this.router.navigate(['/diet'])
  }
cards = [
    { title: 'Sales', value: '$12,400' },
    { title: 'Orders', value: '1,230' },
    { title: 'Users', value: '5,670' },
    { title: 'Revenue', value: '$89,300' }
  ];

  goToLunch() {
    this.router.navigate(['/lunch'], {
      queryParams: {
        meal: 'veg',
        time: 'noon'
      }
    });
  }
  

}