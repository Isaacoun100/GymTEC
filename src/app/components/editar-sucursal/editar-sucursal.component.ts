import { AddBranch } from './../../models/branch/add-branch';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { get_branch } from 'src/app/examples';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent implements OnInit {

  productIdFromRoute: string | null | undefined ;

  get_branch = get_branch;
  sucursalForm = new FormGroup({
      
    nombre_sucursal: new FormControl(get_branch.result.nombre_sucursal, Validators.required) ,
    fecha_apertura: new FormControl(get_branch.result.fecha_apertura, Validators.required),
    horario: new FormControl(get_branch.result.horario, Validators.required),
    cap_max: new FormControl(get_branch.result.cap_max, Validators.required),
    provincia: new FormControl(get_branch.result.provincia, Validators.required),
    canton: new FormControl(get_branch.result.canton, Validators.required),
    distrito: new FormControl(get_branch.result.distrito, Validators.required),
    manager: new FormControl(get_branch.result.distrito, Validators.required),
    telefonos: new FormArray([
      new FormControl(get_branch.result.telefonos[0], Validators.required),
      new FormControl(get_branch.result.telefonos[1], Validators.required)
    ]),
    active_spa: new FormControl(get_branch.result.active_spa, Validators.required),
    active_store: new FormControl(get_branch.result.active_store, Validators.required),
  });

  constructor( private route:ActivatedRoute ){}
  
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = routeParams.get('sucursalNombre');
  }
  
  editarSucursal(form:AddBranch){
    // Use the string variable productIdFromRoute, it contains the name of the Sucursal were we are in
    console.log(this.productIdFromRoute);
  }
  
  nuevoTelefono(){
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.push(new FormControl('', Validators.required))
  }
  
  eliminarTelefono(i: number){
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.removeAt(i)
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }
  
  eliminarSucursal(){
    console.log(this.sucursalForm.controls['telefonos'].value);
  }

}
