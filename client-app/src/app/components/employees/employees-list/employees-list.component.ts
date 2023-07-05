import { Component , OnInit} from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[]=[];
  
  constructor(private employeeService: EmployeesService) {}

  ngOnInit():void
  {
    this.employeeService.getAll()
    .subscribe({
        next: (employees) => {  
          this.employees= employees;      
          console.log(employees);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}
