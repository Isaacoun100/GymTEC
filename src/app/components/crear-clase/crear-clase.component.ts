import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent{

  createClaseForm = new FormGroup({
    tipo: new FormControl('', Validators.required),
    modo: new FormControl('', Validators.required),
    capacidad: new FormControl(0, [Validators.required, Validators.min(1)]),
    fecha: new FormControl('', Validators.required),
    hora_ingreso: new FormControl('', Validators.required),
    hora_salida: new FormControl('', Validators.required),
    encargado: new FormControl('', Validators.required),
  });

  createForm(form:any){
    console.log(form);
  }

}
