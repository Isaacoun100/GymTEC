import { ProxyEmpleadoService } from './../../service/empleado/proxy-empleado.service';
import { AddEmployee } from 'src/app/models/employee/add-employee';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Branch} from 'src/app/models/branch/get-branch';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { EmpleadoService } from 'src/app/service/empleado/empleado.service';
import { ResponseTemplateListBranchesI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.scss'],
})


export class FormEmpleadoComponent implements OnInit {

  // TODO : Solicitar las sucursales de la base de datos
  branches = new Array<Branch>();

  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  empleadoForm = new FormGroup({
    cedula_empleado: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido_1: new FormControl('', Validators.required),
    apellido_2: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    salario: new FormControl(0, Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nombre_sucursal: new FormControl('', Validators.required),
    puesto_descripcion: new FormControl('', Validators.required),
    planilla_descripcion: new FormControl('', Validators.required),
  });

  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  constructor(
  private proxyEmpleadoService: ProxyEmpleadoService,
  private router: Router,
  private api: SucursalService,
  private apiEmpleado: EmpleadoService) {
    this.updateBranches();
  }
  
  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  updateBranches(){
    this.api.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyEmpleadoService.currentEmployee.subscribe(empleadoForm => this.empleadoForm = empleadoForm);
  }

     

  /**
   * @description This method is used to get the value of the form.
   * @param form This is the form that is going to be sent.
   * @version 1.0
   */
  editarEmpleado(form:AddEmployee ){

    //Este es el de crear
    if(this.router.url === '/agregarEmpleado'){
      console.log(form);
      this.apiEmpleado.addEmployee(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/empleados']);
      });
    }

    //Este es el de editar
    else{
      this.apiEmpleado.updateEmployee(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/empleados']);
      });
    }

    console.log(form);
  }

  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  togglePassword(){
    var x = (<HTMLInputElement>document.getElementById("passwordField"));
    if (x.type === "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
  }

}
