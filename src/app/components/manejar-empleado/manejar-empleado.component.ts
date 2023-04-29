import { Component } from '@angular/core';
import { get_all_employees } from 'src/app/examples';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manejar-empleado',
  templateUrl: './manejar-empleado.component.html',
  styleUrls: ['./manejar-empleado.component.scss']
})
export class ManejarEmpleadoComponent {

  constructor(private router:Router){}
  
  // TODO : Solicitar los empleados de la base de datos
  employees = get_all_employees.result;
  
  agregarEmpleado(){
    this.router.navigate(['agregarEmpleado']);
   }

}
