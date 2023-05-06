import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { LoginAdminI } from 'src/app/models/login/login-admin';
import { LoginClienteI } from '../../models/login/login-cliente';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to login an admin using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  loginAdmin(form: LoginAdminI): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_worker';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to login a client using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  loginCliente(form: LoginClienteI): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_client';
    return this.http.post<ResponseTemplateI>(address, form);
  }
}
