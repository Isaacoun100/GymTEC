import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { LoginAdminI } from 'src/app/models/login/login-admin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent implements OnInit {
  constructor(private router: Router, private api: LoginService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    cedula: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  loginAdmin(form: LoginAdminI) {
    console.log(form.cedula);
    console.log(form.password);
    this.api.loginAdmin(form.cedula, form.password).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;

      if (dataResponse.status == 'ok') {
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
