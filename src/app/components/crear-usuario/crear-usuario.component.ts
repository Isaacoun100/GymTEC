import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CreateClient } from 'src/app/models/signup/create-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {

  
  // Formulario de crear cliente
  clientForm = new FormGroup({
    cedula_cliente: new FormControl(0, Validators.required),
    nombre : new FormControl('', Validators.required),
    apellido_1 : new FormControl('', Validators.required),
    apellido_2: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    Altura: new FormControl(0, Validators.required),
    Peso : new FormControl(0, Validators.required),
    Fecha_nacimiento: new FormControl('', Validators.required)
  });
  
  constructor( private router : Router ) {}

  // TODO :  Enviar el formulario a la API
  agregarCliente(form : CreateClient){
    this.router.navigate(['loginCliente']);
  }
  
}
