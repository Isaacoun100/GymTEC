import { Router } from '@angular/router';
import { get_all_inventories } from './../../examples';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manejar-inventario',
  templateUrl: './manejar-inventario.component.html',
  styleUrls: ['./manejar-inventario.component.scss']
})
export class ManejarInventarioComponent {

  constructor(private router:Router){}

  inventories = get_all_inventories;

  agregarInventario(){
    this.router.navigate(['agregarInventario']);
   }

}
