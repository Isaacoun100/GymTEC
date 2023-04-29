import { Router } from '@angular/router';
import { get_all_inventories } from './../../examples';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manejar-inventario',
  templateUrl: './manejar-inventario.component.html',
  styleUrls: ['./manejar-inventario.component.scss']
})
export class ManejarInventarioComponent {

  // TODO : Solicitar los inventarios de la base de datos
  inventories = get_all_inventories;  
  
  constructor(private router:Router){}

  agregarInventario(){
    this.router.navigate(['agregarInventario']);
   }

}
