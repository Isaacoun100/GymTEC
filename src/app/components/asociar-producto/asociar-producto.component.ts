import { branches } from 'src/app/examples';
import { get_all_products } from './../../examples';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { AssignProductResponseTemplateI, ResponseTemplateListBranchesI, ResponseTemplateListProductI } from 'src/app/models/responseTemplate.interface';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { Branch } from 'src/app/models/branch/get-branch';
import { Product } from 'src/app/models/product/get-product';

@Component({
  selector: 'app-asociar-producto',
  templateUrl: './asociar-producto.component.html',
  styleUrls: ['./asociar-producto.component.scss'],
})
export class AsociarProductoComponent {

  /**
   * @description This is the list of the products to show the user in the dropdown
   */
  products = new Array<Product>;
  
  /**
   * @description This is the list of the branches to show the user in the dropdown
   */
  branches = new Array<Branch>;
  
  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  asociarProductoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
  });

  /**
   * @description This is the constructor of the component where we update the branches and products
   * @param route 
   * @param sucursalesService 
   * @param productosService 
   * @version 1.0
   */
  constructor(
    private route: ActivatedRoute,
    private sucursalesService : SucursalService,
    private productosService: ProductoService ) {
      this.updateBranches();
      this.updateProducts();
    }

  
  /**
   * @description This method is used to associate a product to a branch
   * @param form 
   * @version 1.0
   */
  asociarProducto(form: any) {
    // Recordar crear un mensaje de error si el form no pudo ser ingresados
    console.log('Formulario: ', form);

    this.productosService.associateProduct(form).subscribe((data) => {
      let dataResponse: AssignProductResponseTemplateI = data;
      if (dataResponse.status == 'ok') {
        console.log('Producto asociado correctamente');
        alert('Producto asociado correctamente');
      } else {
        console.log('Error al asociar el producto');
        alert('Error al asociar el producto');
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
   * @description This method is used to update the products list
   * @version 1.0
   */
  updateProducts(){
    this.productosService.getAllProducts().subscribe((data) => {
      let dataResponse: ResponseTemplateListProductI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.products = dataResponse.result;
    });
  }

  /**
   * This method is used to change the value of the branch name
   * @param e 
   */
  cambiarSucursal(e: any) {
    this.asociarProductoForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   * This method is used to change the value of the service name
   * @param e 
   */
  cambiarProducto(e: any) {
    this.asociarProductoForm.controls['product']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
