import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BranchResponseTemplateI, ResponseTemplateI, ResponseTemplateListBranchesI } from '../../models/responseTemplate.interface';
import { GetBranch } from 'src/app/models/branch/get-branch';
import { AddBranch } from 'src/app/models/branch/add-branch';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<ResponseTemplateListBranchesI> {
    let address = this.url + 'get_all_branches';
    return this.http.get<ResponseTemplateListBranchesI>(address);
  }

  getSingleBranch(nombre_sucursal: GetBranch): Observable<BranchResponseTemplateI> {
    let address = this.url + 'get_branch';
    return this.http.post<BranchResponseTemplateI>(address, nombre_sucursal);
  }

  addBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'add_branch';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  updateBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'update_branch';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  deleteBranch(nombre_sucursal: GetBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'delete_branch';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: nombre_sucursal,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
