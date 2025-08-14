import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

//  private Mongo_URL = 'mongodb+srv://surendra1006:welcomeToDB@mycluster.92nm0lu.mongodb.net/?retryWrites=true&w=majority&appName=myCluster';
  private URL: string = 'https://dummyjson.com/users';
  private Employee_URL = 'http://192.168.0.100:5000/employees';
  constructor(private http: HttpClient) { }

  getUsers(limit:number=30):Observable<any> {
    // return this.http.get(this.URLUsers);
    return this.http.get<any>(`${this.URL}?limit=${limit}`);
  }
   addEmployee(employeeData: any): Observable<any> {
   return this.http.post(`${this.Employee_URL}+/add-emp`, employeeData)
  }
  getEmployees():Observable<any>{
    return this.http.get(`${this.Employee_URL}/allemployees`)
  }
  getEmployeesPro(){
    return this.http.get(`${this.Employee_URL}/allemployees`)
  }
  updateEmployee(id:string,data:any):Observable<any>{
    return this.http.put(`${this.Employee_URL}/update/${id}`,data)
  }
}
