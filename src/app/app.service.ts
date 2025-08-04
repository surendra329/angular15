import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AppService {

 private Mongo_URL = 'mongodb+srv://surendra1006:welcomeToDB@mycluster.92nm0lu.mongodb.net/?retryWrites=true&w=majority&appName=myCluster';
  private URL: string = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  getUsers(limit:number=30):Observable<any> {
    // return this.http.get(this.URLUsers);
    return this.http.get<any>(`${this.URL}?limit=${limit}`);
  }
   addEmployee(employeeData: any): Observable<any> {
   return this.http.post('http://localhost:5000/employees/add-emp', employeeData)
  }
  getEmployees():Observable<any>{
    return this.http.get('http://localhost:5000/employees/allemployees')
  }
  updateEmployee(id:string,data:any):Observable<any>{
    return this.http.put(`http://localhost:5000/employees/update/${id}`,data)
  }
}
