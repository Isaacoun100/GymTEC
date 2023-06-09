import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente/cliente.service';
import { AddCliente } from 'src/app/models/client/createClient';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {

  
  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  clientForm = new FormGroup({
    cedula_cliente: new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    apellido_1 : new FormControl('', Validators.required),
    apellido_2: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    Altura: new FormControl(0, Validators.required),
    Peso : new FormControl(0, Validators.required),
    fecha_nac: new FormControl('', Validators.required)
  });
  
  /**
   * @description This is the constructor of the component
   * @version 1.0
   * @param router 
   * @param api 
   */
  constructor( 
    private router : Router,
    private api : ClienteService) {}

  /**
   * @description This method is used to create a new client
   * @param form 
   */
  agregarCliente(form : AddCliente){
    this.api.createClient(form).subscribe(data => {

      let dataResponse: ResponseTemplateI = data;
      
      if(dataResponse.status == 'ok'){
        this.router.navigate(['/loginCliente']);
      }
      else{
        alert('No se pudo agregar el usuario');
      }

      console.log(data);
    });
  }
  
}
