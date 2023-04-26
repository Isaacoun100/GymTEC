import { ProxyEquipoService } from 'src/app/service/equipo/proxy-equipo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-equipo',
  templateUrl: './form-equipo.component.html',
  styleUrls: ['./form-equipo.component.scss'],
})
export class FormEquipoComponent {
  equipoForm = new FormGroup({
    num_serie: new FormControl(0, Validators.required),
    tipo_equipo: new FormControl('', Validators.required),
    descripcion_equipo: new FormControl('', Validators.required),
    sucursal: new FormControl('', Validators.required),
  });

  constructor(private proxyEquipoService: ProxyEquipoService) {}

  ngOnInit(): void {
    this.proxyEquipoService.currentEquipment.subscribe(
      (equipoForm) => (this.equipoForm = equipoForm)
    );
  }
}
