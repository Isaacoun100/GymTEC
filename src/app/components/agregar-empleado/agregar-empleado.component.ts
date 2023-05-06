import { ProxyEmpleadoService } from 'src/app/service/empleado/proxy-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

  /**
   * @description This is the form used to capture the user input
   */
  empleadoForm = new FormGroup({

    cedula_empleado : new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    apellido_1 : new FormControl('', Validators.required),
    apellido_2 : new FormControl('', Validators.required),
    provincia : new FormControl('', Validators.required),
    canton : new FormControl('', Validators.required),
    distrito : new FormControl('', Validators.required),
    salario : new FormControl('', Validators.required),
    correo : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    nombre_sucursal : new FormControl('', Validators.required),
    puesto_descripcion : new FormControl('', Validators.required),
    planilla_descripcion : new FormControl('', Validators.required)

  });

  /**
   * @description Creates an instance of AgregarEmpleadoComponent
   * @version 1.0
   */
  constructor(private proxyEmpleadoService: ProxyEmpleadoService) { }

  /**
   * @description This method is executed when the view is initialized, it subscribes the form to the service.
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe(empleadoForm => this.empleadoForm = empleadoForm);
    this.empleadoForm.reset();
  }

  /**
   * @description This method resets the form when the view is destroyed
   * @version 1.0
   */
  ngOnDestroy(){
    this.empleadoForm.reset();
  }

}
