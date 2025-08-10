import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

public employees: any[] = [];
public searchTable:string = '';
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
  get filteredEmployees() {
    if (!this.searchTable) return this.employees;

    const term = this.searchTable.toLowerCase();

    return this.employees.filter(emp =>
      Object.values(emp).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  }
  updateEmployee(record:any){
    console.log(record);
    // let name = record?.name;

     let {name, email, mobile, city} = record;

    this.service.updateEmployee(record?._id,{city:'Vizag'})
    .subscribe(data=>{console.log("Updated Data:",data);})
      // this.service.updateEmployee('688e47b360ca59583f36b7ce', {
      //   name: 'Updated Name',
      //   city: 'New City'
      // }).subscribe(res => {
      //   console.log('Update success', res);
      // });
  }

}
