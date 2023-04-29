import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProduct } from 'src/app/models/product/add-product';

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

  constructor(private proxyProductoService: ProxyProductoService) {}

  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }

  editarProducto(form: AddProduct) {
    // Add the form to the API using the proper service
    console.log(form);
    console.log(this.productoForm);
  }

}
