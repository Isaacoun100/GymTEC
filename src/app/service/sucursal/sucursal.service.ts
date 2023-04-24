import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { GetBranch } from 'src/app/models/branch/get-branch';
import { AddBranch } from 'src/app/models/branch/add-branch';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_branch';
    return this.http.get<ResponseTemplateI>(address);
  }

  getSingleBranch(nombre_sucursal: GetBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'getBranch';
    return this.http.post<ResponseTemplateI>(address, nombre_sucursal);
  }

  addBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'add_branch';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  updateBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'add_branch';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  deleteBranch(nombre_sucursal: GetBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'add_branch';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: nombre_sucursal,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
