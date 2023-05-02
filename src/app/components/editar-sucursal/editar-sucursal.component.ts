import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProxySucursalService } from 'src/app/service/sucursal/proxy-sucursal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { GetBranch } from 'src/app/models/branch/get-branch';
import { BranchResponseTemplateI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent implements OnInit {

  sucursalIdFromRoute: string | null ;

  sucursalRequest : GetBranch | undefined;

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
    private route:ActivatedRoute,
    private router: Router,
    private api: SucursalService ){
      this.sucursalIdFromRoute = this.route.snapshot.paramMap.get('sucursalNombre');
    }
  
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

    console.log(this.sucursalIdFromRoute);
    
    const e: GetBranch = {nombre_sucursal: this.sucursalIdFromRoute};

    console.log(e);

    this.api.getSingleBranch(e).subscribe(data => {
      
      let dataResponse: BranchResponseTemplateI = data;

      const control = <FormArray> this.sucursalForm.controls['telefonos'];

      this.sucursalForm.controls['nombre_sucursal'].setValue( dataResponse.result['nombre_sucursal'] );
      this.sucursalForm.controls['fecha_apertura'].setValue( dataResponse.result['fecha_apertura']);
      this.sucursalForm.controls['horario'].setValue(dataResponse.result['horario'] );
      this.sucursalForm.controls['cap_max'].setValue(dataResponse.result['cap_max']);
      this.sucursalForm.controls['provincia'].setValue(dataResponse.result['provincia']);
      this.sucursalForm.controls['canton'].setValue(dataResponse.result['canton']);
      this.sucursalForm.controls['distrito'].setValue(dataResponse.result['distrito']);
      this.sucursalForm.controls['manager'].setValue(dataResponse.result['manager']);

      for (let index = 0; index < dataResponse.result['telefonos'].length; index++){
        control.push(new FormControl(dataResponse.result['telefonos'][index], Validators.required));
      }

      if(control.length>0)
        control.removeAt(0);
      
      this.sucursalForm.controls['active_spa'].setValue(dataResponse.result['active_spa']);
      this.sucursalForm.controls['active_store'].setValue(dataResponse.result['active_store']);

      console.log(dataResponse);

    }); 
    
  }

  eliminarSucursal(){
    const d: GetBranch = {nombre_sucursal: this.sucursalIdFromRoute};
    this.api.deleteBranch(d).subscribe(data => {
      console.log(data);
      this.router.navigate(['/sucursales']);
    });
        
  }

}
