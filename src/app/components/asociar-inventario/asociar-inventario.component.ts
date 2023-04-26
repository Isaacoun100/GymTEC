import { AssociateInventory } from 'src/app/models/inventory/associate-inventory';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-asociar-inventario',
  templateUrl: './asociar-inventario.component.html',
  styleUrls: ['./asociar-inventario.component.scss'],
})
export class AsociarInventarioComponent {
  asociarIntenvetarioForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    equipo: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute) {}

  ngonInit(): void {}
}
