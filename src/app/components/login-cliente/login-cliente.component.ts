import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {

  constructor( private router : Router) { }
  
  loginForm = new FormGroup({
    correoInput: new FormControl('', {nonNullable: true}),
    contrasenaInput: new FormControl('', {nonNullable: true}),
  });

  loginCliente(){
    this.router.navigate(['panelCliente']);
  }

}
