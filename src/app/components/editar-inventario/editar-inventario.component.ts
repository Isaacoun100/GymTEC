import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { get_inventory } from 'src/app/examples';
import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';
import { GetInventory, Inventory } from 'src/app/models/inventory/get-inventory';
import { InventarioService } from 'src/app/service/inventario/inventario.service';
import { InventoryResponseTemplateI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.scss'],
})
export class EditarInventarioComponent {

  inventarioIdFromRoute: string | null | undefined ;

  // TODO : Solicitar el inventario de la base de datos
  get_inventory = get_inventory;

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  inventarioForm = new FormGroup({
    num_serie: new FormControl(0, Validators.required),
    marca: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    is_used: new FormControl(false, Validators.required),
    tipo_equipo: new FormControl('', Validators.required)
  });

  /**
   * @description Here we assign the value of the route to the variable inventarioIdFromRoute
   * @param proxyInventarioService 
   * @param route 
   * @param router 
   * @param api 
   * @version 1.0
   */
  constructor(
    private proxyInventarioService: ProxyInventarioService,
    private route:ActivatedRoute,
    private router: Router,
    private api: InventarioService ){
      this.inventarioIdFromRoute = this.route.snapshot.paramMap.get('inventarioCodigo');
    }
    
  /**
   * @description This method is used to update the inventory
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm));
      this.inventarioForm.reset();
      this.updateInventario();
  }

  /**
   * @description This method id used to delete the inventory from the database
   * @version 1.0
   */
  eliminarInventario(){
    let numberValue = Number(this.inventarioIdFromRoute);
    const d: GetInventory = {num_serie: numberValue};
    this.api.deleteInventory(d).subscribe(data => {
      console.log(data);
      this.router.navigate(['/inventario']);
    });
  }

  /**
   * @description This method is used reset the inventory form when destroyed
   * @version 1.0
   */
  ngOnDestroy(){
    this.inventarioForm.reset();
  }

  /**
   * @description This method is used to update the inventory
   * @version 1.0
   */
  updateInventario(){

    console.log(this.inventarioIdFromRoute);

    const e: GetInventory = {num_serie: Number(this.inventarioIdFromRoute)};

    this.api.getInventory(e).subscribe(data => {
      let dataResponse : InventoryResponseTemplateI = data;
      this.inventarioForm.setValue(dataResponse.result);
    });
  }

}
