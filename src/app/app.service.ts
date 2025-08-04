import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http:HttpClient) { }

  getEmployee(){
    return this.http.get('http://localhost:5000/employees/allemployees')
  }

}
