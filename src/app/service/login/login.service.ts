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

  loginAdmin(cedula: any, password: any): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_worker';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('cedula', cedula);
    queryParams = queryParams.append('password', password);
    return this.http.get<ResponseTemplateI>(address, { params: queryParams });
  }

  loginCliente(cedula: any, password: any): Observable<ResponseTemplateI> {
    let address = this.url + 'auth_client';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('cedula', cedula);
    queryParams = queryParams.append('password', password);
    return this.http.get<ResponseTemplateI>(address, { params: queryParams });
  }
}
