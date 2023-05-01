import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginClienteI } from 'src/app/models/login/login-cliente';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { LoginService } from 'src/app/service/login/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent {


  loginForm = new FormGroup({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
  });
  constructor( private router : Router , private api: LoginService) { }
  
  loginCliente(form: LoginClienteI){
    console.log(form.email);
    console.log(form.password);
    this.api.loginCliente(form).subscribe(data => {
      let dataResponse: ResponseTemplateI = data;
      if(JSON.parse(JSON.stringify(dataResponse.result))['email'] != ''){
        console.log(dataResponse.status);
        sessionStorage.setItem('client', JSON.stringify(data.result));
        this.router.navigate(['panelCliente']);
        console.log(data);
      }else{
        console.log(dataResponse.status);
        alert("Usuario o contraseña incorrecto");
        console.log(data);
      }
    });
  }

}
