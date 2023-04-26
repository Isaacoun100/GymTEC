import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent {
  productoForm = new FormGroup({
    codigo_barras: new FormControl('WHO WAS IN PARIS?', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(private proxyProductoService: ProxyProductoService) {}

  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }
}
