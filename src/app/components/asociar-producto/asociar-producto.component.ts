import { branches } from 'src/app/examples';
import { get_all_products } from './../../examples';
import { AssociateProduct } from 'src/app/models/product/associate-product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-asociar-producto',
  templateUrl: './asociar-producto.component.html',
  styleUrls: ['./asociar-producto.component.scss'],
})
export class AsociarProductoComponent {

  products = get_all_products;
  branches = branches;

  asociarProductoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    producto: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute) {}

  ngonInit(): void {}

  asociarProducto(form: any) {
    // Recordar crear un mensaje de error si el form no pudo ser ingresados
    console.log(form);
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
    this.asociarProductoForm.controls['producto']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
