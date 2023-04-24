import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { AssociateTreatment } from 'src/app/models/treatment/associate-treatment';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  associateTreatment(form: AssociateTreatment): Observable<ResponseTemplateI> {
    let address = this.url + 'associate_treatment ';

    return this.http.put<ResponseTemplateI>(address, form);
  }
}
