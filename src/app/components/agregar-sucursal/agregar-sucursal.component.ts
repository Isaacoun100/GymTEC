import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProxySucursalService } from 'src/app/service/sucursal/proxy-sucursal.service';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.scss']
})
export class AgregarSucursalComponent implements OnInit {

  constructor(private data: ProxySucursalService,) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(sucursalForm => this.sucursalForm = sucursalForm)
    this.sucursalForm.reset();
  }

  ngOnDestroy(){
    this.sucursalForm.controls['telefonos'].clear();
    this.sucursalForm.reset();
  }

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

}
