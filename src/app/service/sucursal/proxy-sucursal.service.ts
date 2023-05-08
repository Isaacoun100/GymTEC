import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxySucursalService {

  /**
   * @description This is the constructor of the class. It only needs the HttpClient module.
   * @version 1.0
   */
  private messageSource = new BehaviorSubject<FormGroup>(

    new FormGroup({
      
      nombre_sucursal: new FormControl('', Validators.required),
      fecha_apertura: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      cap_max: new FormControl(0, Validators.required),
      provincia: new FormControl('', Validators.required),
      canton: new FormControl('', Validators.required),
      distrito: new FormControl('', Validators.required),
      manager: new FormControl('', Validators.required),
      telefonos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      active_spa: new FormControl(false, Validators.required),
      active_store: new FormControl(false, Validators.required),
    })

  );

  currentMessage = this.messageSource.asObservable();

  constructor() { }

}
