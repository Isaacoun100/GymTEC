import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxySucursalService } from 'src/app/service/sucursal/proxy-sucursal.service';
import { AddBranch } from './../../models/branch/add-branch';
import { Router } from '@angular/router';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
  styleUrls: ['./form-sucursal.component.scss']
})
export class FormSucursalComponent implements OnInit {

  
  options = [
    {value: true, name: 'Activado'},
    {value: false, name: 'Desactivado'}
  ];
  
  /**
   * @description This method is used to get the value of the form.
   */
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
    active_spa: new FormControl(this.options[0].value, Validators.required),
    active_store: new FormControl(this.options[0].value, Validators.required),
  })

  /**
   * @description The constructor of the class.
   * @param data
   * @param router
   * @param api
   * @version 1.0
   */
  constructor( 
    private data: ProxySucursalService,
    private router: Router,
    private api: SucursalService
     ){}
  
  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  ngOnInit(){
    this.data.currentMessage.subscribe(sucursalForm => this.sucursalForm = sucursalForm);
  }
  
  /**
   * @description This method is used to get the value of the form.
   * @param index
   * @param item
   * @version 1.0
   */
  trackByFn(index: number, item: any) {
    return index;
  }

  /**
   * @description This method is used to get the value of the form.
   * @version 1.0
   */
  nuevoTelefono(){
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.push(new FormControl('', Validators.required))
  }

  /**
   * @description This method is used to get the value of the form.
   * @param form 
   */
  editarSucursal(form:AddBranch){

    //Este es el de crear
    if(this.router.url === '/agregarSucursal'){
     this.api.addBranch(form).subscribe(data => {
      console.log(data);
      this.router.navigate(['/sucursales']);
    }
    );
    }

    //Este es el de editar
    else{
      this.api.updateBranch(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/sucursales']);

      }
      );
    }

    console.log(form);

  }

  /**
   * @description This method is used to get the value of the form.
   * @param index
   * @version 1.0
   */
  eliminarTelefono(index:number){
    console.log(index);
    const control = <FormArray> this.sucursalForm.controls['telefonos'];
    control.removeAt(index);
  }

} 
