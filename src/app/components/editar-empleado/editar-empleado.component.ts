import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxyEmpleadoService } from 'src/app/service/empleado/proxy-empleado.service';
import { EmpleadoService } from 'src/app/service/empleado/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEmployee } from 'src/app/models/employee/get-employee';
import { EmployeeResponseTemplateI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss'],
})
export class EditarEmpleadoComponent implements OnInit {
  
  empleadoIdFromRoute: string | null ;

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  empleadoForm = new FormGroup({

    cedula_empleado : new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    apellido_1 : new FormControl('', Validators.required),
    apellido_2 : new FormControl('', Validators.required),
    provincia : new FormControl('', Validators.required),
    canton : new FormControl('', Validators.required),
    distrito : new FormControl('', Validators.required),
    salario : new FormControl(0, Validators.required),
    correo : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    nombre_sucursal : new FormControl('', Validators.required),
    puesto_descripcion : new FormControl('', Validators.required),
    planilla_descripcion : new FormControl('', Validators.required)

  });

  /**
   * @description This method is used to update the employee
   * @version 1.0
   */
  updateEmployee(){

    console.log(this.empleadoIdFromRoute);

    const e: GetEmployee = {cedula_empleado : this.empleadoIdFromRoute};

    this.api.getEmployee(e).subscribe((data) => {
      let dataResponse: EmployeeResponseTemplateI = data;
      this.empleadoForm.setValue(dataResponse.result);
      console.log(dataResponse);

    });
    
  }

  /**
   * @description This is the constructor of the component, here we access the URL route parameter
   * @param proxyEmpleadoService 
   * @param api 
   * @param route 
   * @param router 
   */
  constructor(
    private proxyEmpleadoService: ProxyEmpleadoService,
    private api: EmpleadoService,
    private route:ActivatedRoute,
    private router: Router) {
      this.empleadoIdFromRoute = this.route.snapshot.paramMap.get('empleadoCedula');
    }

  /**
   * @description This method is executed when the component is created, it subscribes to the form, resets the form and updates the employee
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe( empleadoForm => this.empleadoForm = empleadoForm);
    this.empleadoForm.reset();
    this.updateEmployee();
  }

  /**
   * @description This method is executed when the component is destroyed, it resets the form
   * @version 1.0
   */
  ngOnDestroy(){
    this.empleadoForm.reset();
  }

  /**
   * @description This method is used to update the employee
   * @version 1.0
   */
  eliminarEmpleado(){
    const d: GetEmployee = {cedula_empleado: this.empleadoIdFromRoute};
    this.api.deleteEmpleado(d).subscribe(data => {
      console.log(data);
      this.router.navigate(['/empleados']);
    });
  }

}
