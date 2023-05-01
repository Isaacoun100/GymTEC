import { Router } from '@angular/router';
import { get_all_inventories } from './../../examples';
import { Component } from '@angular/core';
import {InventarioService} from '../../service/inventario/inventario.service';
import { ResponseTemplateListInventoryI } from 'src/app/models/responseTemplate.interface';
import { Inventory } from 'src/app/models/inventory/get-inventory';

@Component({
  selector: 'app-manejar-inventario',
  templateUrl: './manejar-inventario.component.html',
  styleUrls: ['./manejar-inventario.component.scss']
})
export class ManejarInventarioComponent {

  // TODO : Solicitar los inventarios de la base de datos
  inventories = new Array<Inventory> ;  
  
  constructor(private api: InventarioService, private router:Router){}

  ngOnInit(): void {
    this.getAllInventory();
  }

  getAllInventory(){
    this.api.getAllInventories().subscribe((data) => {
      let dataResponse: ResponseTemplateListInventoryI = data;
      console.log(dataResponse);
      for (let index = 0; index < dataResponse.result.length; index++) {
        let inventory = new Inventory(
          dataResponse.result[index].num_serie,
          dataResponse.result[index].marca,
          dataResponse.result[index].tipo_equipo
          );
        this.inventories.push(inventory);
      }
    });
  }
  agregarInventario(){
    this.router.navigate(['agregarInventario']);
   }

}
