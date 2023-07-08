import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {
  
newEmploye: Employee={
  id:'00000000-0000-0000-0000-000000000000',
  name:'',
  email:'',
  phone:0,
  salary:0,
  department:''
}

constructor(private employeeService: EmployeesService, private router: Router) {}

ngOnInit(): void {  
}

addEmployee(){  
this.employeeService.add(this.newEmploye)
.subscribe({
  next: (employee) =>
  this.router.navigate(['employees'])
})
}

}
