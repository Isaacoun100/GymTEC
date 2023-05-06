import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaseService } from 'src/app/service/clase/clase.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent{

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  createClaseForm = new FormGroup({
    clase_id: new FormControl(0, Validators.required),
    servicio: new FormControl( '', Validators.required),
    modo: new FormControl('', Validators.required),
    capacidad: new FormControl(0, [Validators.required, Validators.min(1)]),
    fecha: new FormControl('', Validators.required),
    hora_ingreso: new FormControl('', Validators.required),
    hora_salida: new FormControl('', Validators.required),
    encargado: new FormControl('', Validators.required),
  });

  /**
   * @description This is the constructor of the component
   * @param api 
   */
  constructor(private api: ClaseService) { }


  /**
   * @description This method is used to create a new class
   * @param form 
   */
  createForm(form:any){
    console.log(form);
    this.api.createClass(form).subscribe((data) => {
      console.log(data);
      if(data.status == 'ok'){
        console.log('Clase creada correctamente');
        alert('Clase creada correctamente');
      }else{
        console.log('Error al crear la clase');
        alert('Error al crear la clase');
      }
    });
  }

}
