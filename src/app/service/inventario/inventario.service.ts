import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListInventoryI, InventoryResponseTemplateI } from '../../models/responseTemplate.interface';
import { AddInventory } from 'src/app/models/inventory/add-inventory';
import { GetInventory } from 'src/app/models/inventory/get-inventory';
import { AssociateInventory } from 'src/app/models/inventory/associate-inventory';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllInventories(): Observable<ResponseTemplateListInventoryI> {
    let address = this.url + 'get_all_inventories';
    return this.http.get<ResponseTemplateListInventoryI>(address);
  }

  getInventory(num_serie: GetInventory): Observable<InventoryResponseTemplateI> {
    let address = this.url + 'get_inventory';
    return this.http.post<InventoryResponseTemplateI>(address, num_serie);
  }

  addInventory(form: AddInventory) {
    let address = this.url + 'add_inventory';
    return this.http.post<ResponseTemplateI>(address, form);
  }

  updateInventory(form: GetInventory): Observable<ResponseTemplateI> {
    let address = this.url + 'update_inventory';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  associateInventory(form: AssociateInventory): Observable<ResponseTemplateI> {
    let address = this.url + 'associate_inventory';

    return this.http.put<ResponseTemplateI>(address, form);
  }

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
