import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //baseApiURL: string = environment.baseApiURL;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]>
  {
    //return this.http.get<Employee[]>(this.baseApiURL + '/api/employees');
    return this.http.get<Employee[]>('https://localhost:7092/api/employees');
  }
}
