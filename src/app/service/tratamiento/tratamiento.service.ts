import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AssignTreatmentResponseTemplateI, ResponseTemplateI } from '../../models/responseTemplate.interface';
import { AssociateTreatment } from 'src/app/models/treatment/associate-treatment';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the branches using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListBranchesI>
   */
  associateTreatment(form: AssociateTreatment): Observable<AssignTreatmentResponseTemplateI> {
    let address = this.url + 'associate_treatment ';

    return this.http.post<AssignTreatmentResponseTemplateI>(address, form);
  }
}
