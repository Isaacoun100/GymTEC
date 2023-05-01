import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListProductI } from '../../models/responseTemplate.interface';
import { AddProduct } from 'src/app/models/product/add-product';
import { AssociateProduct } from 'src/app/models/product/associate-product';
import { GetProduct } from 'src/app/models/product/get-product';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = myGlobals.URL;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ResponseTemplateListProductI> {
    let address = this.url + 'get_all_products';
    return this.http.get<ResponseTemplateListProductI>(address);
  }

  getProduct(codigo_barras: GetProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'get_product ';

    return this.http.post<ResponseTemplateI>(address, codigo_barras);
  }

  addProduct(form: AddProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'add_product ';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  updateProduct(form: AddProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'update_product ';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  associateProduct(form: AssociateProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'associate_product  ';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  deleteBranch(codigo_barras: GetProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'delete_product ';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: codigo_barras,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
