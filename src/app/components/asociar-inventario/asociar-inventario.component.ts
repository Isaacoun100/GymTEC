import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { Branch } from 'src/app/models/branch/get-branch';
import { AssignInventoryResponseTemplateI, ResponseTemplateListBranchesI, ResponseTemplateListInventoryI } from 'src/app/models/responseTemplate.interface';
import { InventarioService } from 'src/app/service/inventario/inventario.service';
import { Inventory } from 'src/app/models/inventory/get-inventory';

@Component({
  selector: 'app-asociar-inventario',
  templateUrl: './asociar-inventario.component.html',
  styleUrls: ['./asociar-inventario.component.scss'],
})
export class AsociarInventarioComponent {

  /**
   * @description This is the list of the branches to show the user in the dropdown
   * @version 1.0
   */
  branches = new Array<Branch>;

  /**
   * @description This is the list of the inventories to show the user in the dropdown
   * @version 1.0
   */
  inventories = new Array<Inventory>;

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  asociarIntenvetarioForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    num_serie: new FormControl(0, Validators.required),
  });

  /**
   * @description This is the constructor of the component where we update the branches and inventories
   * @param route 
   * @param sucursalesService 
   * @param inventarioService 
   */
  constructor(
    private sucursalesService: SucursalService,
    private inventarioService: InventarioService) {
      this.updateBranches();
      this.updateInventario();
    }

  /**
   * @description This method is used to associate an inventory to a branch
   * @version 1.0
   * @param form 
   */
  asociarInventario(form: any) {

    console.log(form);

    this.inventarioService.associateInventory(form).subscribe((data) => {
      let dataResponse: AssignInventoryResponseTemplateI = data;
      if (dataResponse.status == 'ok') {
        console.log('Inventario asociado correctamente');
        alert('Inventario asociado correctamente');
      } else {
        console.log('Error al asociar el inventario');
        alert('Error al asociar el inventario');
      }
    }
    );
  }

  /**
   * @description This method is used to update the branches list
   * @version 1.0
   */
  updateBranches(){
    this.sucursalesService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  /**
   * @description This method is used to update the inventories list
   * @version 1.0
   */
  updateInventario(){

    this.inventarioService.getAllInventories().subscribe(data => {
      let dataResponse : ResponseTemplateListInventoryI = data;
      this.inventories = dataResponse.result;
    });
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
