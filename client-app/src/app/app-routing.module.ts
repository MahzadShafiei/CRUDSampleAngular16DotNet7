import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path:'employees',
    component:EmployeesListComponent
  },
  {
    path:'employees/add',
    component:EmployeeAddComponent
  },
  {
    path:'employees/edit/:id',
    component:EmployeeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
