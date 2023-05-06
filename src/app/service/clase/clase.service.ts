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

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to create a new class using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  createClass(form: CreateClass): Observable<ResponseTemplateI> {
    let address = this.url + 'create_class';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to get all the classes using HTTP method GET.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  getAllClasses(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_classes ';
    
    return this.http.get<ResponseTemplateI>(address);
  }

  /**
   * @description This method is used to enroll a student to a class using HTTP method POST.
   * @param form 
   * @version 1.0
   * @returns 
   */
  enrollClass(form: EnrollClass): Observable<ResponseTemplateI> {
    let address = this.url + 'enroll_class';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to get all the classes of a student using HTTP method POST.
   * @param form 
   * @version 1.0
   * @returns 
   */
  solicitarCitas(form: RequestClassI) : Observable<ResponseTemplateListClassI> {
    let address = this.url + 'filter_class';

    return this.http.post<ResponseTemplateListClassI>(address, form);
  }

}
