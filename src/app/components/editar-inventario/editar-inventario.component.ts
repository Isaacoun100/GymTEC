import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';

@Component({
  selector: 'app-editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.scss'],
})
export class EditarInventarioComponent {
  inventarioForm = new FormGroup({
    num_serie: new FormControl('WHO WAS IN PARIS?', Validators.required),
    marca: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    is_used: new FormControl(false, Validators.required),
    tipo_equipo: new FormControl('', Validators.required),
    nombre_sucursal: new FormControl('', Validators.required),
  });

  constructor(private proxyInventarioService: ProxyInventarioService) {}

  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm)
    );
  }
}
