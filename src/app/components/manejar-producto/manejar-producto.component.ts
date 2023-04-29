import { get_all_products } from './../../examples';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manejar-producto',
  templateUrl: './manejar-producto.component.html',
  styleUrls: ['./manejar-producto.component.scss']
})
export class ManejarProductoComponent {
  
    // Agregar los productos de la base de datos
    products = get_all_products;

  constructor( private router: Router ) {}

  agregarProducto() {
    this.router.navigate(['agregarProducto']);
  }

}
