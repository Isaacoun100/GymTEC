import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { LoginAdminI } from 'src/app/models/login/login-admin';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent {

  /**
   * @description constructor for the login admin component
   * @param router 
   * @param api 
   */
  constructor(private router: Router, private api: LoginService) {}

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  loginForm = new FormGroup({
    cedula: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  /**
   * @description This method is used to login the admin
   * @param form 
   */
  loginAdmin(form: LoginAdminI) {
    console.log(form.cedula);
    console.log(form.password);
    this.api.loginAdmin(form).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;

      if (JSON.parse(JSON.stringify(dataResponse.result))['cedula'] != '') {
        console.log(dataResponse.status);
        sessionStorage.setItem('user', JSON.stringify(data.result));
        this.router.navigate(['panelAdmin']);
        console.log(data);
      } else {
        console.log(dataResponse.status);
        alert('Usuario o contraseña incorrecto');
        console.log(data);
      }
    });
  }
}
