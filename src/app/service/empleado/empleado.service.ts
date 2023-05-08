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

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http 
   * @version 1.0
   * @returns Observable<ResponseTemplateListEmployeesI>
   */
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<ResponseTemplateListEmployeesI> {
    let address = this.url + 'get_all_employees';
    return this.http.get<ResponseTemplateListEmployeesI>(address);
  }

  /**
   * @description This method is used to get a specific employee using HTTP method POST.
   * @param cedula_empleado 
   * @version 1.0
   * @returns Observable<EmployeeResponseTemplateI>
   */
  getEmployee(cedula_empleado: GetEmployee): Observable<EmployeeResponseTemplateI> {
    let address = this.url + 'get_employee';
    return this.http.post<EmployeeResponseTemplateI>(address, cedula_empleado);
  }
  /**
   * @description This method is used to create a new employee using HTTP method POST.
   * @param form 
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  addEmployee(form: AddEmployee): Observable<ResponseTemplateI> {
    let address = this.url + 'add_employee';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to update a specific employee using HTTP method PUT.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  updateEmployee(form: AddEmployee): Observable<ResponseTemplateI> {
    let address = this.url + 'update_employee';

    return this.http.put<ResponseTemplateI>(address, form);
  }
  /**
   * @description This method is used to delete a specific employee using HTTP method DELETE.
   * @param cedula_empleado
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
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
