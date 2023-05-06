import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyProductoService {
  /**
   * @description This is a new form group created to store the data of the current product.
   * @version 1.0
   * @returns FormGroup
   */
  private messageSource = new BehaviorSubject<FormGroup>(
    new FormGroup({
      codigo_barras: new FormControl('', Validators.required),
      nombre_producto: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    })
  );

  currentProduct = this.messageSource.asObservable();

  constructor() {}
}
