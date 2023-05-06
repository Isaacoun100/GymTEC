import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/globals';
import { AddCliente } from 'src/app/models/client/createClient';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url = URL;

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @param http 
   * @version 1.0
   */
  constructor(private http: HttpClient) { }

  /**
   * @description This method is used to create a new client using HTTP method POST.
   * @param form 
   * @version 1.0
   * @returns Observable<ResponseTemplateI>
   */
  createClient(form: AddCliente) : Observable<ResponseTemplateI> {
    let address = this.url + 'create_client';
    return this.http.post<ResponseTemplateI>(address, form);
  }

}
