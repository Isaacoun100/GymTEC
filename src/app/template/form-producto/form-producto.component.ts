import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProduct } from 'src/app/models/product/add-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss'],
})
export class FormProductoComponent {

  productoForm = new FormGroup({
    codigo_barras: new FormControl('', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private proxyProductoService: ProxyProductoService,
    private router: Router) {}

  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }

  // Enviar form a la base de datos
  editarProducto(form: AddProduct) {
    
    //Este es el de crear
    if(this.router.url === '/agregarProducto'){}

    //Este es el de editar
    else{}

  }

}
