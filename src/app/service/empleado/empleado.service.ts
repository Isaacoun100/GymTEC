import { AddEmployee } from './../../models/employee/add-employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListEmployeesI } from '../../models/responseTemplate.interface';
import { GetEmployee } from '../../models/employee/get-employee';
import { EmployeeResponseTemplateI } from '../../models/responseTemplate.interface';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<ResponseTemplateListEmployeesI> {
    let address = this.url + 'get_all_employees';
    return this.http.get<ResponseTemplateListEmployeesI>(address);
  }

  getEmployee(cedula_empleado: GetEmployee): Observable<EmployeeResponseTemplateI> {
    let address = this.url + 'get_employee';
    return this.http.post<EmployeeResponseTemplateI>(address, cedula_empleado);
  }

  addEmployee(form: AddEmployee): Observable<ResponseTemplateI> {
    let address = this.url + 'add_employee';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  updateEmployee(form: AddEmployee): Observable<ResponseTemplateI> {
    let address = this.url + 'update_employee';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  deleteEmpleado(cedula_empleado: GetEmployee): Observable<ResponseTemplateI> {
    let address = this.url + 'delete_employee';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: cedula_empleado,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
