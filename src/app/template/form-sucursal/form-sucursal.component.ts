import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxySucursalService } from 'src/app/service/sucursal/proxy-sucursal.service';
import { AddBranch } from './../../models/branch/add-branch';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.scss']
})
export class FormSucursalComponent implements OnInit {

  sucursalForm = new FormGroup({
      
    nombre_sucursal: new FormControl('', Validators.required),
    fecha_apertura: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    cap_max: new FormControl(0, Validators.required),
    provincia: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    manager: new FormControl('', Validators.required),
    telefonos: new FormArray([
      new FormControl('', Validators.required)
    ]),
    active_spa: new FormControl(false, Validators.required),
    active_store: new FormControl(false, Validators.required),
  })

  constructor( private data: ProxySucursalService, ){}
  
  ngOnInit(){
    this.data.currentMessage.subscribe(sucursalForm => this.sucursalForm = sucursalForm)
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }

  nuevoTelefono(){
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.push(new FormControl('', Validators.required))
  }

  editarSucursal(form:AddBranch){
    // Add the form to the API using the proper service
    console.log(form);
  }

  eliminarTelefono(index:number){
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.removeAt(index);
  }

} 
