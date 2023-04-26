import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxyEquipoService } from 'src/app/service/equipo/proxy-equipo.service';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss'],
})
export class AgregarEquipoComponent {
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
