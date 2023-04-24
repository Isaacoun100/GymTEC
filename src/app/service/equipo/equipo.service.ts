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

  constructor(private http: HttpClient) {}

  getAllEquipment(): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_equipment';
    return this.http.get<ResponseTemplateI>(address);
  }

  getEquipment(num_serie: GetEquipment): Observable<ResponseTemplateI> {
    let address = this.url + 'get_all_equipment';
    return this.http.get<ResponseTemplateI>(address);
  }
}
