import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListClassI } from '../../models/responseTemplate.interface';
import { CreateClass } from 'src/app/models/class/create-class-admin';
import { EnrollClass } from 'src/app/models/class/enroll-class';

import * as myGlobals from '../../../../src/app/globals';
import { RequestClassI } from 'src/app/models/class/clase';

@Injectable({
  providedIn: 'root',
})
export class ClaseService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  createClass(form: CreateClass): Observable<ResponseTemplateI> {
    let address = this.url + 'create_class';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  getAllClasses(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_classes ';
    
    return this.http.get<ResponseTemplateI>(address);
  }

  enrollClass(form: EnrollClass): Observable<ResponseTemplateI> {
    let address = this.url + 'enroll_class';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  solicitarCitas(form: RequestClassI) : Observable<ResponseTemplateListClassI> {
    let address = this.url + 'filter_class';

    return this.http.post<ResponseTemplateListClassI>(address, form);
  }

}
