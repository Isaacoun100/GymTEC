import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyEmpleadoService {
  
  /**
   * @description This is a new form group created to store the data of the current employee.
   * @version 1.0
   */
  private messageSource = new BehaviorSubject<FormGroup>(
    new FormGroup({

        cedula_empleado : new FormControl('', Validators.required),
        nombre : new FormControl('', Validators.required),
        apellido_1 : new FormControl('', Validators.required),
        apellido_2 : new FormControl('', Validators.required),
        provincia : new FormControl('', Validators.required),
        canton : new FormControl('', Validators.required),
        distrito : new FormControl('', Validators.required),
        salario : new FormControl('', Validators.required),
        correo : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required),
        nombre_sucursal : new FormControl('', Validators.required),
        puesto_descripcion : new FormControl('', Validators.required),
        planilla_descripcion : new FormControl('', Validators.required)

      })
    );

    currentEmployee = this.messageSource.asObservable();
    
  constructor() { }
}
