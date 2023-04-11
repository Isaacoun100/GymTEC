import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  constructor(private router: Router){}

  loginForm = new FormGroup({
    cedula: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  loginAdmin(){
    console.warn('Your order has been submitted', this.loginForm.value);
    this.router.navigate(['panelAdmin']);
  }
}
