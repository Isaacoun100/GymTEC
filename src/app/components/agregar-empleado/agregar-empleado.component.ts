import { ProxyEmpleadoService } from 'src/app/service/empleado/proxy-empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

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

  constructor(private proxyEmpleadoService: ProxyEmpleadoService) { }

  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe(empleadoForm => this.empleadoForm = empleadoForm);
    this.empleadoForm.reset();
  }

  ngOnDestroy(){
    this.empleadoForm.reset();
  }

}
