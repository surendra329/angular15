import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public name :string = '';
  public mobileNumber:any;
  public employeeList:any=[];
constructor(private service:AppService,private http:HttpClient){}

public loginObj = {
    name: '',
    email: '',
    mobile:'',
    city:''
  };
  // ngOnInit(){
  //   this.toastr.success('Registered saved successfully!', 'Success');
  // }
  addEmployee(){
    
    this.loginObj.name = this.loginObj.name.trim();
    this.loginObj.email = this.loginObj.email.trim();
    this.loginObj.mobile = this.loginObj.mobile;
    this.loginObj.city = this.loginObj.city;

    this.service.addEmployee(this.loginObj).subscribe({
      next: (res) => {
        console.log(res);
        // this.toastr.success('Registered saved successfully!', 'Success');
        // this.router.navigate(['./login']);

      },
      error: (error) => {
        // this.toastr.error(error?.message, 'Error ');

        console.log(error);
      }
    });
  }

}
