import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaseService } from 'src/app/service/clase/clase.service';

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

  constructor(private api: ClaseService) { }



  // Enviar form a la base de datos, cambiar el tipo del form que se envía en el argumento
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
