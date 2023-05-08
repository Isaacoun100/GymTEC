import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyInventarioService {
  /**
   * @description This is a new form group created to store the data of the current inventory.
   * @version 1.0
   */
  private messageSource = new BehaviorSubject<FormGroup>(
    new FormGroup({
      num_serie: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      is_used: new FormControl(false, Validators.required),
      tipo_equipo: new FormControl('', Validators.required)
    })
  );

  currentInventory = this.messageSource.asObservable();

  constructor() {}
}
