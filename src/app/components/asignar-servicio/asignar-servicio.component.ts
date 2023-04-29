import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { branches, services } from 'src/app/examples';

@Component({
  selector: 'app-asignar-servicio',
  templateUrl: './asignar-servicio.component.html',
  styleUrls: ['./asignar-servicio.component.scss']
})
export class AsignarServicioComponent implements OnInit {


  // TODO : Get the branches from the API
  branches = branches;

  // TODO : Get the services from the API
  services = services;


  asignarServicioForm = new FormGroup({
    nombre_sucursal: new FormControl(null, Validators.required),
    servicio: new FormControl(null, Validators.required)
    });

  constructor() { }

  ngOnInit(): void {}

  // TODO : Enviar el formulario a la base de datos
  asignarServicio(form:any){

    console.log(form);
  }

  /**
   * This method is used to change the value of the branch name
   * @param e 
   */
  cambiarNombreSucursal(e: any) {
    this.asignarServicioForm.controls['nombre_sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   * This method is used to change the value of the service name
   * @param e 
   */
  cambiarServicio(e: any) {
    this.asignarServicioForm.controls['servicio']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
