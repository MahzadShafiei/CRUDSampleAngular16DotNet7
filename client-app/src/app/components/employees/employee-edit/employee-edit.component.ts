import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  
  employee:Employee={
    id:'00000000-0000-0000-0000-000000000000',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };

  constructor(private route: ActivatedRoute, private empployeeService:EmployeesService, private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next:(params) =>
      {
      const id=  params.get('id');
      if(id)
      {
        this.empployeeService.get(id)
        .subscribe({
          next: (response) =>
          this.employee=response,
        });
      }
      }
  })

  }

  editEmployee()
  {
this.empployeeService.update(this.employee.id, this.employee)
.subscribe({
next: (response) =>
{
this.router.navigate(['/employees']);
}
  });
  }
}
