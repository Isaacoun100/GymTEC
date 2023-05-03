import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AssignResponseTemplateI, ResponseTemplateI } from '../../models/responseTemplate.interface';
import { AddService, Service } from 'src/app/models/services/add-service';
import { ServiceResponseTemplateI } from 'src/app/models/responseTemplate.interface';

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

  addService(form: Service): Observable<ServiceResponseTemplateI> {
    let address = this.url + 'add_service';
    return this.http.post<ServiceResponseTemplateI>(address, form);
  }

  assignService(form: AddService): Observable<AssignResponseTemplateI> {
    let address = this.url + 'associate_service';
    return this.http.post<AssignResponseTemplateI>(address, form);
  }

}

export { AddService };

