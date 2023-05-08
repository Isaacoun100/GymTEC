import { Component } from '@angular/core';
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
  
  /**
   * @description This is the array of employees
   */
  employees = new Array<Employees>();

  /**
   * @description This method is used to initialize the component, here we get all the employees from the database
   */
  ngOnInit(): void {
    this.getAllEmployees();
  }

  /**
   * @description This method is used to get all the employees from the database
   */
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
    
  
  /**
   * @description Routes the admin to the AgregarEmpleado component
   */
  agregarEmpleado(){
    this.router.navigate(['agregarEmpleado']);
   }

}
