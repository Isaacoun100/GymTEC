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

  constructor(private http: HttpClient) {}

  loginAdmin(form: LoginAdminI): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_worker';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  loginCliente(form: LoginClienteI): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_client';
    return this.http.post<ResponseTemplateI>(address, form);
  }
}
