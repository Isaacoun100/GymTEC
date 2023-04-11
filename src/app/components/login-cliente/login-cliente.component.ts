import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {

  
  loginForm = new FormGroup({
    correoInput: new FormControl(null, [Validators.required, Validators.email]),
    contrasenaInput: new FormControl(null, [Validators.required]),
  });

  loginCliente(){}
}
