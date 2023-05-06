import { Router } from '@angular/router';
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

  /**
   * @description This is the array of inventories
   * @version 1.0
   */
  inventories = new Array<Inventory> ;  
  
  /**
   * @description Constructor for the manejar inventario component
   * @param api 
   * @param router
   * @version 1.0 
   */
  constructor(private api: InventarioService, private router:Router){}

  /**
   * @description This method is used to initialize the component, here we get all the inventories from the database
   * @version 1.0
   */
  ngOnInit(): void {
    this.getAllInventory();
  }

  /**
   * @description This method is used to get all the inventories from the database
   * @version 1.0
   */
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

  /**
   * @description Routes the admin to the AgregarInventario component
   * @version 1.0
   */
  agregarInventario(){
    this.router.navigate(['agregarInventario']);
   }

}
