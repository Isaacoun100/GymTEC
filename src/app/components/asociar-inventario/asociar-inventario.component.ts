import { get_all_inventories } from './../../examples';
import { AssociateInventory } from 'src/app/models/inventory/associate-inventory';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';
import { branches } from 'src/app/examples';

@Component({
  selector: 'app-asociar-inventario',
  templateUrl: './asociar-inventario.component.html',
  styleUrls: ['./asociar-inventario.component.scss'],
})
export class AsociarInventarioComponent implements OnInit {

  // Agregar las sucursales de la base de datos
  branches = branches;

  // Agregar los inventarios de la base de datos
  inventories = get_all_inventories;

  asociarIntenvetarioForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    num_serie: new FormControl(0, Validators.required),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  // Enviar form a la base de datos, cambiar el tipo del form que se envía en el argumento
  asociarInventario(form: any) {
    // Recordar crear un mensaje de error si el form no pudo ser ingresados
    console.log(form);
  }

  /**
   * This method is used to change the value of the branch name
   * @param e 
   */
  cambiarSucursal(e: any) {
    this.asociarIntenvetarioForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   * This method is used to change the value of the service name
   * @param e 
   */
  cambiarNumSerie(e: any) {
    this.asociarIntenvetarioForm.controls['num_serie']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
