import { Component , OnInit} from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[]=[
    {
      id:'E3CA4CDA-667E-4581-9842-6708BC9B12B9',
      name:'name1',
      email:'name1@email.com',
      phone: 123,
      salary:1000,
      department:'Education'
    },
    {
      id:'EB34A33C-9928-4366-969D-ACF3F3D8548F',
      name:'name2',
      email:'name2@email.com',
      phone: 456,
      salary:2000,
      department:'IT'
    },
    {
      id:'7B543043-0358-45D1-856B-3C5741ED1B6C',
      name:'name3',
      email:'name3@email.com',
      phone: 789,
      salary:3000,
      department:'Account'
    }
  ];
  
  constructor() {}

  ngOnInit():void
  {}

}
