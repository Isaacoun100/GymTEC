import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { GetPayroll } from 'src/app/models/payroll/get-payroll';
import { get_all_payrolls } from 'src/app/examples';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class PlanillaService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getPayroll(form: GetPayroll): Observable<ResponseTemplateI> {
    let address = this.url + 'get_payroll';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  getAllPayrolls(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_payrolls';

    return this.http.get<ResponseTemplateI>(address);
  }
}
