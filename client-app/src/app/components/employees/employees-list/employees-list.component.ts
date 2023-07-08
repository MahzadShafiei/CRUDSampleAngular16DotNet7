import { Component , OnInit} from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[]=[];
  
  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit():void
  {
    this.getAll();
  }

  edit(id:string)
  {
    this.router.navigate(['/employees/edit/'+id])
  }

  delete(id: string)
  {
  this.employeeService.delete(id)
  .subscribe({
    next: (response) =>
    {
      this.getAll();
    }
  });
  }

  getAll()
    {
      this.employeeService.getAll()
      .subscribe({
          next: (employees) => {  
            this.employees= employees; 
          },
          error: (response) => {
            console.log(response);
          }
        });
    } 
}


