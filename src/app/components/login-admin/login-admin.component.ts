import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  loginForm = new FormGroup({
    cedula: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  loginAdmin(){
    console.warn('Your order has been submitted', this.loginForm.value);
  }
}
