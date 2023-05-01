import { ProxyEmpleadoService } from './../../service/empleado/proxy-empleado.service';
import { AddEmployee } from 'src/app/models/employee/add-employee';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { get_all_positions } from 'src/app/examples';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { branches } from 'src/app/examples';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.scss'],
})


export class FormEmpleadoComponent implements OnInit {

  // TODO : Solicitar las sucursales de la base de datos
  branches = branches;
  
  // TODO : Solicitar los puestos de la base de datos
  get_all_positions = get_all_positions;

  empleadoForm = new FormGroup({
    cedula_empleado: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido_1: new FormControl('', Validators.required),
    apellido_2: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    salario: new FormControl(0, Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nombre_sucursal: new FormControl('', Validators.required),
    puesto_descripcion: new FormControl('', Validators.required),
    planilla_descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private proxyEmpleadoService: ProxyEmpleadoService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe(empleadoForm => this.empleadoForm = empleadoForm);
  }

  // TODO : Enviar el formulario a la base de datos
  editarEmpleado(form:AddEmployee ){

    console.log(this.router.url);

    //Este es el de crear
    if(this.router.url === '/agregarEmpleado'){
      console.log('Estoy en agregar empleado');
    }

    //Este es el de editar
    else{
      console.log('Estoy en editar empleado');
    }

    console.log(form);
  }

  togglePassword(){

    var x = (<HTMLInputElement>document.getElementById("passwordField"));
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
  }
  }

}
