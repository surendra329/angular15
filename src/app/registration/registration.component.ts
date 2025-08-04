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

  submitForm(){
    let params = {name:this.name,mobile:this.mobileNumber}
    console.log(params);
  }

  getEmployees(){
    this.service.getEmployee().subscribe(data => {
      console.log(data);
      this.employeeList = data;
    });
  }


}
