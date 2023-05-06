import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseTemplateI, ResponseTemplateListProductI, ProductResponseTemplateI, AssignProductResponseTemplateI } from '../../models/responseTemplate.interface';
import { AddProduct } from 'src/app/models/product/add-product';
import { AssociateProduct } from 'src/app/models/product/associate-product';
import { GetProduct } from 'src/app/models/product/get-product';

import * as myGlobals from '../../../../src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = myGlobals.URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  constructor(private http: HttpClient) {}

  /**
   * @description This method is used to get all the products using HTTP method GET.
   * @version 1.0
   * @returns Observable<ResponseTemplateListProductI>
   */
  getAllProducts(): Observable<ResponseTemplateListProductI> {
    let address = this.url + 'get_all_products';

    return this.http.get<ResponseTemplateListProductI>(address);
  }

  /**
   * @description This method is used to get a specific product using HTTP method POST.
   * @param codigo_barras
   * @version 1.0
   * @returns Observable<ProductResponseTemplateI>
   */
  getProduct(codigo_barras: GetProduct): Observable<ProductResponseTemplateI> {
    let address = this.url + 'get_product';

    return this.http.post<ProductResponseTemplateI>(address, codigo_barras);
  }

  /**
   * @description This method is used to add a new product using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  addProduct(form: AddProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'add_product';

    return this.http.post<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to update a product using HTTP method PUT.
   * @param form
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  updateProduct(form: AddProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'update_product';

    return this.http.put<ResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to associate a product using HTTP method POST.
   * @param form
   * @version 1.0
   * @returns Observable<AssignProductResponseTemplateI>
   */
  associateProduct(form: AssociateProduct): Observable<AssignProductResponseTemplateI> {
    let address = this.url + 'associate_product';

    return this.http.post<AssignProductResponseTemplateI>(address, form);
  }

  /**
   * @description This method is used to delete a product using HTTP method DELETE.
   * @param codigo_barras
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  deleteBranch(codigo_barras: GetProduct): Observable<ResponseTemplateI> {
    let address = this.url + 'delete_product';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: codigo_barras,
    };
    return this.http.delete<ResponseTemplateI>(address, Options);
  }
}
