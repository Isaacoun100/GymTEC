import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI } from '../../models/responseTemplate.interface';
import { GetEquipment } from 'src/app/models/equipment/get-equipment';
import { AddEquipment } from 'src/app/models/equipment/add-equipment';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the equipment using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  getAllEquipment(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_equipment';
    return this.http.get<ResponseTemplateI>(address);
  }

  /**
   * @description This method is used to get a specific equipment using HTTP method GET.
   * @param num_serie 
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  getEquipment(num_serie: GetEquipment): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_equipment';
    return this.http.get<ResponseTemplateI>(address);
  }
}
