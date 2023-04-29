import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {

  
  loginForm = new FormGroup({
    correoInput: new FormControl('', {nonNullable: true}),
    contrasenaInput: new FormControl('', {nonNullable: true}),
  });

  loginCliente(){}

  constructor( route : Router ) { }
}
