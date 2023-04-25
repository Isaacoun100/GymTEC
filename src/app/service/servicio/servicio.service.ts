import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { AddService } from 'src/app/models/services/add-service';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_services';

    return this.http.get<ResponseTemplateI>(address);
  }

  addService(form: AddService): Observable<ResponseTemplateI> {
    let address = this.url + 'get_services';

    return this.http.post<ResponseTemplateI>(address, form);
  }
}
export { AddService };

