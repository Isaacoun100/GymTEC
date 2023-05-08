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

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the branches using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListBranchesI>
   */
  getAllBranches(): Observable<ResponseTemplateListBranchesI> {
    let address = this.url + 'get_all_branches';
    return this.http.get<ResponseTemplateListBranchesI>(address);
  }

  /**
   * @description This method is used to get a specific branch using HTTP method POST.
   * @param nombre_sucursal
   * @version 1.0
   * @returns Observable<BranchResponseTemplateI>
   */
  getSingleBranch(nombre_sucursal: GetBranch): Observable<BranchResponseTemplateI> {
    let address = this.url + 'get_branch';
    return this.http.post<BranchResponseTemplateI>(address, nombre_sucursal);
  }

  /**
   * @description This method is used to add a new branch using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  addBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'add_branch';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to update a branch using HTTP method PUT.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  updateBranch(form: AddBranch): Observable<ResponseTemplateI> {
    let address = this.url + 'update_branch';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to delete a branch using HTTP method DELETE.
   * @param nombre_sucursal
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
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

  /**
   * @description This method is used to copy a branch using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  copySucursal(form:any): Observable<ResponseTemplateI> {
    let address = this.url + 'copy_branch';
    return this.http.post<ResponseTemplateI>(address, form);
  }

}
