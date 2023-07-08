import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL: string = environment.baseApiURL;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseApiURL + '/api/employees');    
  }

  add(newEmploye: Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(this.baseApiURL + '/api/employees',newEmploye);
  }

  get(id:string):Observable<Employee>
  {
    return this.http.get<Employee>(this.baseApiURL + '/api/employees/' + id);
  }

  update(id:string, updatedEmployee:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(this.baseApiURL + '/api/employees/' + id, updatedEmployee)
  }
}
