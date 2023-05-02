import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyInventarioService {
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
