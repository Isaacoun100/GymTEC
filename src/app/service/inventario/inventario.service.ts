import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListInventoryI, InventoryResponseTemplateI, AssignInventoryResponseTemplateI } from '../../models/responseTemplate.interface';
import { AddInventory } from 'src/app/models/inventory/add-inventory';
import { GetInventory } from 'src/app/models/inventory/get-inventory';
import { AssociateInventory } from 'src/app/models/inventory/associate-inventory';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the inventories using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListInventoryI>
   */
  getAllInventories(): Observable<ResponseTemplateListInventoryI> {
    let address = this.url + 'get_all_inventories';
    return this.http.get<ResponseTemplateListInventoryI>(address);
  }

  /**
   * @description This method is used to get a specific inventory using HTTP method POST.
   * @param num_serie
   * @version 1.0
   * @returns Observable<InventoryResponseTemplateI>
   */
  getInventory(num_serie: GetInventory): Observable<InventoryResponseTemplateI> {
    let address = this.url + 'get_inventory';
    return this.http.post<InventoryResponseTemplateI>(address, num_serie);
  }

  /**
   * @description This method is used to add a new inventory using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  addInventory(form: AddInventory) {
    let address = this.url + 'add_inventory';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to update an inventory using HTTP method PUT.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  updateInventory(form: GetInventory): Observable<ResponseTemplateI> {
    let address = this.url + 'update_inventory';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to associate an inventory using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<AssignInventoryResponseTemplateI>
   */
  associateInventory(form: AssociateInventory): Observable<AssignInventoryResponseTemplateI> {
    let address = this.url + 'associate_inventory';

    return this.http.post<AssignInventoryResponseTemplateI>(address, form);
  }

   /**
   * @description This method is used to delete an inventory using HTTP method DELETE.
   * @param num_serie
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  deleteInventory(num_serie: GetInventory): Observable<ResponseTemplateI> {
    let address = this.url + 'delete_inventory';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: num_serie,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
