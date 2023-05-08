import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListI } from '../../models/responseTemplate.interface';
import { GetPayroll } from 'src/app/models/payroll/get-payroll';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class PlanillaService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get a specific payroll using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  getPayroll(form: GetPayroll): Observable<ResponseTemplateI> {
    let address = this.url + 'get_payroll';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to get all the payrolls using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListI>
   */
  getAllPayrolls(): Observable<ResponseTemplateListI> {
    let address = this.url + 'get_all_payrolls';

    return this.http.get<ResponseTemplateListI>(address);
  }
}
