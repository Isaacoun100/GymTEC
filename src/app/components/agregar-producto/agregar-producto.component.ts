import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
})
export class AgregarProductoComponent {

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  productoForm = new FormGroup({
    codigo_barras: new FormControl('WHO WAS IN PARIS?', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  /**
   * @description Creates an instance of AgregarProductoComponent
   * @version 1.0
   */
  constructor(private proxyProductoService: ProxyProductoService) {}

  /**
   * @description This method is executed when the view is initialized, it subscribes the form to the service.
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }
}
