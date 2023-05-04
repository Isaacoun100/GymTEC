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

  // Agregar los productos de la base de datos
  products = new Array<Product>;
  
  // Agregar las sucursales de la base de datos
  branches = new Array<Branch>;

  asociarProductoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private sucursalesService : SucursalService,
    private productosService: ProductoService ) {
      this.updateBranches();
      this.updateProducts();
    }

  ngonInit(): void {}

  // Enviar form a la base de datos, cambiar el tipo del form que se envía en el argumento
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

  updateBranches(){
    this.sucursalesService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

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
