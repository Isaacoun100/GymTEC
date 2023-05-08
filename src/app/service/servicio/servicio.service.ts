import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AssignResponseTemplateI, ResponseTemplateI, ResponseTemplateListServiceI } from '../../models/responseTemplate.interface';
import { AddService, Service } from 'src/app/models/services/add-service';
import { ServiceResponseTemplateI } from 'src/app/models/responseTemplate.interface';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the services using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListServiceI>
   */
  getAllServices(): Observable<ResponseTemplateListServiceI> {
    let address = this.url + 'get_services';

    return this.http.get<ResponseTemplateListServiceI>(address);
  }

  /**
   * @description This method is used to get a specific service using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  addService(form: Service): Observable<ServiceResponseTemplateI> {
    let address = this.url + 'add_service';
    return this.http.post<ServiceResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to get a specific service using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  assignService(form: AddService): Observable<AssignResponseTemplateI> {
    let address = this.url + 'associate_service';
    return this.http.post<AssignResponseTemplateI>(address, form);
  }

}

export { AddService };

