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

  updateEmployee(){
    
    this.empleadoForm.controls['cedula_empleado'].setValue(get_employee.result.cedula_empleado);
    this.empleadoForm.controls['nombre'].setValue(get_employee.result.nombre);
    this.empleadoForm.controls['apellido_1'].setValue(get_employee.result.apellido_1);
    this.empleadoForm.controls['apellido_2'].setValue(get_employee.result.apellido_2);
    this.empleadoForm.controls['provincia'].setValue(get_employee.result.provincia);
    this.empleadoForm.controls['canton'].setValue(get_employee.result.canton);
    this.empleadoForm.controls['distrito'].setValue(get_employee.result.distrito);
    this.empleadoForm.controls['salario'].setValue(get_employee.result.salario);
    this.empleadoForm.controls['correo'].setValue(get_employee.result.correo);
    this.empleadoForm.controls['password'].setValue(get_employee.result.password);
    this.empleadoForm.controls['nombre_sucursal'].setValue(get_employee.result.nombre_sucursal);
    this.empleadoForm.controls['puesto_descripcion'].setValue(get_employee.result.puesto_descripcion);
    this.empleadoForm.controls['planilla_descripcion'].setValue(get_employee.result.planilla_descripcion);
    
  }

  constructor(private proxyEmpleadoService: ProxyEmpleadoService) {}

  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe( empleadoForm => this.empleadoForm = empleadoForm);
    this.empleadoForm.reset();
    this.updateEmployee();
  }

  ngOnDestroy(){
    this.empleadoForm.reset();
  }

  eliminarEmpleado(){
    console.log('Empleado eliminado');
  }

}
