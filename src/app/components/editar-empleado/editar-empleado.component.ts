import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxyEmpleadoService } from 'src/app/service/empleado/proxy-empleado.service';
import { get_employee } from 'src/app/examples';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss'],
})
export class EditarEmpleadoComponent implements OnInit {
  get_employee = get_employee;

  empleadoForm = new FormGroup({
    cedula_empleado: new FormControl(
      get_employee.result.cedula_empleado,
      Validators.required
    ),
    nombre: new FormControl(
      get_employee.result.nombre, 
      Validators.required
      ),
    apellido_1: new FormControl(
      get_employee.result.apellido_1,
      Validators.required
    ),
    apellido_2: new FormControl(
      get_employee.result.apellido_2,
      Validators.required
    ),
    provincia: new FormControl(
      get_employee.result.provincia,
      Validators.required
    ),
    canton: new FormControl(get_employee.result.canton, Validators.required),
    distrito: new FormControl(
      get_employee.result.distrito,
      Validators.required
    ),
    salario: new FormControl(get_employee.result.salario, Validators.required),
    correo: new FormControl(get_employee.result.correo, Validators.required),
    password: new FormControl(
      get_employee.result.password,
      Validators.required
    ),
    nombre_sucursal: new FormControl(
      get_employee.result.nombre_sucursal,
      Validators.required
    ),
    puesto_descripcion: new FormControl(
      get_employee.result.puesto_descripcion,
      Validators.required
    ),
    planilla_descripcion: new FormControl(
      get_employee.result.planilla_descripcion,
      Validators.required
    ),
  });

  constructor(private proxyEmpleadoService: ProxyEmpleadoService) {}

  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe(
      (empleadoForm) => (this.empleadoForm = empleadoForm)
    );
  }
}
