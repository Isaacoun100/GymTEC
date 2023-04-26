import { AddService as sendService } from 'src/app/service/servicio/servicio.service';
import { branches, services } from 'src/app/examples';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.scss']
})
export class AgregarServicioComponent implements OnInit {

  branches = branches;
  services = services;

  agregarServicioForm = new FormGroup({
    nombre_sucursal: new FormControl(null, Validators.required),
    servicio: new FormControl(null, Validators.required),
    descripcion: new FormControl('', Validators.required)
    });


  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {}

  agregarServicio(form:AddService){
    // Recordar crear un mensaje de error si el form no pudo ser ingresados
    console.log(form);
  }

  cambiarNombreSucursal(e: any) {
    this.agregarServicioForm.controls['nombre_sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  cambiarServicio(e: any) {
    this.agregarServicioForm.controls['servicio']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
