import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyEquipoService {
  private messageSource = new BehaviorSubject<FormGroup>(
    new FormGroup({
      num_serie: new FormControl(0, Validators.required),
      tipo_equipo: new FormControl('', Validators.required),
      descripcion_equipo: new FormControl('', Validators.required),
      sucursal: new FormControl('', Validators.required),
    })
  );
  currentEquipment = this.messageSource.asObservable();

  constructor() {}
}
