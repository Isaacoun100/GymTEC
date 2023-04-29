import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { get_branch } from 'src/app/examples';
import { ProxySucursalService } from 'src/app/service/sucursal/proxy-sucursal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent implements OnInit {

  productIdFromRoute: string | null | undefined ;

  get_branch = get_branch;

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

  constructor(
    private data: ProxySucursalService,
    private route:ActivatedRoute
    ){}
  
  ngOnInit(){
    this.data.currentMessage.subscribe(sucursalForm => this.sucursalForm = sucursalForm)
    this.sucursalForm.reset();
    this.updateSucursal();
  }

  ngOnDestroy(){
    this.sucursalForm.controls['telefonos'].clear();
    this.sucursalForm.reset();
  }

  updateSucursal(){

    const control = <FormArray> this.sucursalForm.controls['telefonos'];

    this.sucursalForm.controls['nombre_sucursal'].setValue(get_branch.result.nombre_sucursal);
    this.sucursalForm.controls['fecha_apertura'].setValue(get_branch.result.fecha_apertura);
    this.sucursalForm.controls['horario'].setValue(get_branch.result.horario);
    this.sucursalForm.controls['cap_max'].setValue(get_branch.result.cap_max);
    this.sucursalForm.controls['provincia'].setValue(get_branch.result.provincia);
    this.sucursalForm.controls['canton'].setValue(get_branch.result.canton);
    this.sucursalForm.controls['distrito'].setValue(get_branch.result.distrito);
    this.sucursalForm.controls['manager'].setValue(get_branch.result.manager);

    for (let index = 0; index < get_branch.result.telefonos.length; index++){
      control.push(new FormControl(get_branch.result.telefonos[index], Validators.required));
    }

    if(control.length>0)
      control.removeAt(0);
    
    this.sucursalForm.controls['active_spa'].setValue(get_branch.result.active_spa);
    this.sucursalForm.controls['active_store'].setValue(get_branch.result.active_store);
    
  }

  eliminarSucursal(){
    // Get route parameter
    this.productIdFromRoute = this.route.snapshot.paramMap.get('sucursalNombre');
    console.log(this.productIdFromRoute);
  }

}
