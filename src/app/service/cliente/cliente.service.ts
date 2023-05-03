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

  constructor(private http: HttpClient) { }

  createClient(form: AddCliente) : Observable<ResponseTemplateI> {
    let address = this.url + 'create_client';
    return this.http.post<ResponseTemplateI>(address, form);
  }

}
