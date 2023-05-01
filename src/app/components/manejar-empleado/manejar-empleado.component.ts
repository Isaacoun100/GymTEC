import { Component } from '@angular/core';
import { get_all_employees } from 'src/app/examples';
import { Router } from '@angular/router';
import {EmpleadoService} from '../../service/empleado/empleado.service';
import { ResponseTemplateListEmployeesI } from 'src/app/models/responseTemplate.interface';
import { Employees } from 'src/app/models/employee/get-employee';

@Component({
  selector: 'app-manejar-empleado',
  templateUrl: './manejar-empleado.component.html',
  styleUrls: ['./manejar-empleado.component.scss']
})
export class ManejarEmpleadoComponent {

  constructor(private api: EmpleadoService, private router:Router){}
  
  // TODO : Solicitar los empleados de la base de datos
  employees = new Array<Employees>();

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.api.getAllEmployees().subscribe((data) => {
      let dataResponse: ResponseTemplateListEmployeesI = data;
      console.log(dataResponse);
      for (let index = 0; index < dataResponse.result.length; index++) {
        let employee = new Employees(
          dataResponse.result[index].cedula,
          dataResponse.result[index].nombre,
          dataResponse.result[index].apellido_1,
          dataResponse.result[index].apellido_2
          );
        this.employees.push(employee);
      }

    });
  }
    
  
  agregarEmpleado(){
    this.router.navigate(['agregarEmpleado']);
   }

}
